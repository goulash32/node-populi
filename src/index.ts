import fetch from 'node-fetch';
import xml2js from 'xml2js';
import camelCase from 'camelcase';

import {
  PopuliID,
  Address,
  GetTermStudentsOptions,
  PopuliError,
} from './types';

type PopuliConnectionInfo = {
  schoolUrl: string;
  username?: string;
  password?: string;
  accessKey?: string;
};

type PopuliResultOptions = {
  camelCase?: boolean;
  coerceNumbers?: boolean;
};

class PopuliConnectionImpl {
  public async taskRequest(
    schoolUrl: string,
    accessKey: string,
    taskName: string,
    options?: PopuliResultOptions,
    args?: any
  ) {
    const formData = new URLSearchParams();
    formData.append('access_key', accessKey);
    formData.append('task', taskName);

    if (args) {
      Object.entries(args).forEach(([key, value]) => {
        if (value) formData.append(key, value as string);
      });
    }

    const response = await (
      await fetch(`${schoolUrl}/api/`, {
        method: 'POST',
        body: formData,
      })
    ).text();

    const responseJson = await xml2js.parseStringPromise(response, {
      explicitArray: false,
      valueProcessors: options.coerceNumbers
        ? [xml2js.processors.parseNumbers]
        : [],
      tagNameProcessors: options.camelCase ? [camelCase] : [],
    });

    if (responseJson.error) {
      throw new PopuliError(
        responseJson.error.code,
        responseJson.error.message
      );
    }

    return responseJson.response;
  }
}

class PopuliConnection {
  public constructor(
    connectionInfo: PopuliConnectionInfo,
    resultOptions?: PopuliResultOptions
  ) {
    if (resultOptions) {
      this._resultOptions = { coerceNumbers: true, ...resultOptions };
    } else {
      this._resultOptions = { coerceNumbers: true, camelCase: false };
    }

    if (connectionInfo.accessKey) this._isConnected = true;

    this._connectionInfo = connectionInfo;
    this._populiConnectionImpl = new PopuliConnectionImpl();
  }

  public async connect() {
    await this.authenticate();
  }

  private async addAddress(person: boolean, id: PopuliID, address: Address) {
    return this.taskRequest('addAddress', {
      person_id: person ? id : undefined,
      organization_id: person ? undefined : id,
      street: address.street,
      city: address.city,
      state: address.state,
      postal: address.postal,
      country: address.country,
      type: address.type,
      primary: address.primary,
      public: address.public,
    });
  }

  public async addPersonAddress(personId: PopuliID, address: Address) {
    return this.addAddress(true, personId, address);
  }

  public async addOrganizationAddress(
    organizationId: PopuliID,
    address: Address
  ) {
    return this.addAddress(false, organizationId, address);
  }

  public async getAcademicYears() {
    return this.taskRequest('getAcademicYears', {}, 'academic_year');
  }

  public async getAcademicTerms() {
    return this.taskRequest('getAcademicTerms', {}, 'academic_term');
  }

  public async getCountries() {
    return (await this.taskRequest('getCountries', {}, 'countries')).country;
  }

  public async getCourseCatalog(includeRetired: boolean = false) {
    return this.taskRequest(
      'getCourseCatalog',
      { include_retired: includeRetired },
      'course'
    );
  }

  public async getCourseGroupInfo(
    courseGroupId: PopuliID,
    academicYearId?: PopuliID
  ) {
    const taskResult = await this.taskRequest(
      'getCourseGroupInfo',
      {
        course_group_id: courseGroupId,
        academic_year_id: academicYearId,
      },
      'catalog_courses'
    );

    return taskResult[this.convertToAppropriateCase('catalog_course')];
  }

  public async getCourseGroups() {
    const taskResult = await this.taskRequest(
      'getCourseGroups',
      {},
      'course_groups'
    );
    return taskResult[this.convertToAppropriateCase('course_group')];
  }

  public async getCourseInstance(instanceId: PopuliID) {
    return this.taskRequest(
      'getCourseInstance',
      { instance_id: instanceId },
      ''
    );
  }

  public async getTermCourseInstances(termId: PopuliID) {
    return this.taskRequest(
      'getTermCourseInstances',
      { term_id: termId },
      'course_instance'
    );
  }

  public async getTermStudents(
    termId?: PopuliID,
    options?: GetTermStudentsOptions,
    page: number = 1
  ) {
    return this.taskRequest(
      'getTermStudents',
      {
        term_id: termId,
        program_id: options?.programId,
        campus_id: options?.campusId,
        return_image_data: options?.returnImageData,
        page,
      },
      'student'
    );
  }

  get isConnected() {
    return this._isConnected;
  }

  private async authenticate() {
    if (this._isConnected) return;

    const formData = new URLSearchParams();
    formData.append('username', this._connectionInfo.username);
    formData.append('password', this._connectionInfo.password);

    const response = await fetch(`${this._connectionInfo.schoolUrl}/api/`, {
      method: 'POST',
      body: formData,
    });

    const responseXml = await response.text();
    const responseJson = await xml2js.parseStringPromise(responseXml, {
      explicitArray: false,
    });

    if (responseJson.error) {
      throw new Error(
        `${responseJson.error.code}: ${responseJson.error.message}`
      );
    }

    this._connectionInfo.accessKey = responseJson.response.access_key;
    this._isConnected = true;
  }

  private async taskRequest(
    taskName: string,
    args?: any,
    listElementName?: string
  ) {
    const taskResult = await this._populiConnectionImpl.taskRequest(
      this._connectionInfo.schoolUrl,
      this._connectionInfo.accessKey,
      taskName,
      this._resultOptions,
      args
    );

    if (listElementName) {
      return this.retrieveElement(taskResult, listElementName);
    }

    return taskResult;
  }

  /** This is necessary to retrieve the contents of the root of the response, depending on whether camel-case is
      specified */
  private retrieveElement(element: any, name: string) {
    return element[this._resultOptions.camelCase ? camelCase(name) : name];
  }

  private convertToAppropriateCase(text: string) {
    if (this._resultOptions.camelCase) return camelCase(text);

    return text;
  }

  private _populiConnectionImpl: PopuliConnectionImpl;
  private _connectionInfo: PopuliConnectionInfo;
  private _resultOptions: PopuliResultOptions;
  private _isConnected: boolean = false;
}

export { PopuliConnection, PopuliConnectionInfo, PopuliResultOptions };