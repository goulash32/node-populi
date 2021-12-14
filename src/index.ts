import fetch from 'node-fetch';
import xml2js from 'xml2js';
import camelCase from 'camelcase';

import { toPopuliBoolean, toPopuliDate } from './helpers';

import {
  PopuliID,
  Address,
  GetTermStudentsParams,
  PopuliError,
  CustomFieldsType,
  GetApplicationFieldOptionsParams,
  GetApplicationsParams,
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

  /**
   * Adds an address to a person.
   * @param personId The ID of the person to add an address for.
   * @param address The address to add.
   * @returns A Promise that resolves to the ID of the address.
   */
  public async addPersonAddress(personId: PopuliID, address: Address) {
    return this.addAddress(true, personId, address);
  }

  /**
   * Adds an address to an organization.
   * @param organizationId The ID of the organization to add an address for.
   * @param address The address to add.
   * @returns A Promise that resolves to the ID of the address.
   */
  public async addOrganizationAddress(
    organizationId: PopuliID,
    address: Address
  ) {
    return this.addAddress(false, organizationId, address);
  }

  /**
   * Returns all academic terms.
   * @returns A Promise that resolves to an array of academic terms records.
   */
  public async getAcademicTerms() {
    return this.taskRequest('getAcademicTerms', {}, 'academic_term');
  }

  /**
   * Returns all academic years.
   * @returns A Promise that resolves to an array of academic year records.
   */
  public async getAcademicYears() {
    return this.taskRequest('getAcademicYears', {}, 'academic_year');
  }

  /**
   * Returns a particular financial aid application (each student can have one per aid year).
   * @param aidApplicationId The ID of the aid application.
   * @returns A Promise that resolves to an individual aid application.
   */
  public async getAidApplication(aidApplicationId: PopuliID) {
    return this.taskRequest(
      'getAidApplication',
      { aid_application_id: aidApplicationId },
      'aid_application'
    );
  }

  /**
   * Returns a particular financial aid application (each student can have one per aid year).
   * @param aidApplicationId The ID of the aid application.
   * @param aidYearId The ID of the aid year.
   * @returns A Promise that resolves to an individual aid application.
   */
  public async getAidApplicationForStudentAidYear(
    aidApplicationId: PopuliID,
    aidYearId: PopuliID
  ) {
    return this.taskRequest(
      'getAidApplicationForStudentAidYear',
      { aid_application_id: aidApplicationId, aid_year_id: aidYearId },
      'aid_application'
    );
  }

  /**
   * Returns all information related to donation appeals configured for your institution.
   * @returns A Promise that resolves to an array of donation appeals.
   */
  public async getAppeals() {
    return this.taskRequest('getAppeals', {}, 'appeal');
  }

  /**
   * Returns an application.
   * @param applicationId The ID of the application.
   * @returns A Promise that resolves to an application.
   */
  public async getApplication(applicationId: PopuliID) {
    return this.taskRequest(
      'getApplication',
      { application_id: applicationId },
      'application'
    );
  }

  /**
   * Returns the options for an application field.
   *
   * _Note: Only application fields with a `data_type` of `CHOICE` or `MULTIPLE_ANSWER` will return options._
   * @param applicationFieldId The ID of the application field.
   * @param params Parameters to further filter the result.
   * @returns A Promise that resolves to an array of options for the requested application field.
   */
  public async getApplicationFieldOptions(
    applicationFieldId: PopuliID,
    params?: GetApplicationFieldOptionsParams
  ) {
    const fieldOptions = await this.taskRequest(
      'getApplicationFieldOptions',
      {
        application_field_id: applicationFieldId,
        country: params?.country,
        degree_id: params?.degreeId,
      },
      'application_field_options'
    );

    return fieldOptions.option;
  }

  /**
   * Returns all application fields for a particular application.
   * @param applicationId The ID of the application.
   * @returns A Promise that resolves to an array of fields for the requested application.
   */
  public async getApplicationFields(applicationId: PopuliID) {
    return this.taskRequest(
      'getApplicationFields',
      {
        application_id: applicationId,
      },
      'field'
    );
  }

  /**
   * Returns all application templates.
   * @param showOnlineOnly If `true` only application templates that are set to show online will be returned. Defaults to `false`.
   * @returns A Promise that resolves to an array of application templates.
   */
  public async getApplicationTemplates(showOnlineOnly: boolean = false) {
    return this.taskRequest(
      'getApplicationTemplates',
      {
        show_online_only: showOnlineOnly,
      },
      'application_template'
    );
  }

  /**
   * Returns applications based on the filter conditions.
   * @param applicationTemplateId The ID of the application template.
   * @param params Conditions for filtering the returned applications.
   * @returns A Promise that resolves to an array of applications.
   */
  public async getApplications(
    applicationTemplateId: PopuliID,
    params?: GetApplicationsParams
  ) {
    return this.taskRequest(
      'getApplications',
      {
        application_template_id: applicationTemplateId,
        date_field: params?.dateField,
        start_date: params?.startDate
          ? toPopuliDate(params.startDate)
          : undefined,
        end_date: params?.endDate ? toPopuliDate(params.endDate) : undefined,
        term_id: params?.termId,
        program_id: params?.programId,
        degree_id: params?.degreeId,
        specialization_id: params?.specializationId,
        lead_active: params?.leadActive
          ? toPopuliBoolean(params.leadActive)
          : undefined,
        offset: params?.offset,
      },
      'application',
      true
    );
  }

  /**
   * Returns assignment comments for a particular assignment and person.
   * @param assignmentId The ID of the assignment.
   * @param personId The ID of the person.
   * @returns A Promise that resolves to an array of assignment comments.
   */
  public async getAssignmentComments(
    assignmentId: PopuliID,
    personId: PopuliID
  ) {
    return this.taskRequest(
      'getAssignmentComments',
      {
        assignment_id: assignmentId,
        person_id: personId,
      },
      'comment'
    );
  }

  /**
   * Returns all the roles in Populi (Student, Staff, Admissions, etc).
   * @returns A Promise that resolves to an array of roles.
   */
  public async getAvailableRoles() {
    return this.taskRequest('getAvailableRoles', {}, 'role', true);
  }

  /**
   * Returns all financial aid COA categories.
   * @returns A Promise that resolves to an array of financial aid COA categories.
   */
  public async getCOACategories() {
    return this.taskRequest('getCOACategories', {}, 'coa_category', true);
  }

  /**
   * Returns all information related to donation campaigns configured for your institution.
   * @returns A Promise that resolves to an array of donation campaigns.
   */
  public async getCampaigns() {
    return this.taskRequest('getCampaigns', {}, 'campaign', true);
  }

  /**
   * Returns campus life rooms configured for an academic term.
   * @param academicTermId The ID of the academic term.
   * @returns A Promise that resolves to an array of campus life rooms.
   */
  public async getCampusLifeRooms(academicTermId: PopuliID) {
    return this.taskRequest(
      'getCampusLifeRooms',
      {
        academic_term_id: academicTermId,
      },
      'room',
      true
    );
  }

  /**
   * Returns all campuses.
   * @returns A Promise that resolves to an array of campuses.
   */
  public async getCampuses() {
    return this.taskRequest('getCampuses', {}, 'campus', true);
  }

  /**
   * Returns a catalog course and all of its equivalencies, prerequisites, corequisites, etc.
   * @param catalogCourseId The ID of the catalog course.
   * @returns A Promise that resolves to a catalog course.
   */
  public async getCatalogCourse(catalogCourseId: PopuliID) {
    return this.taskRequest('getCatalogCourse', {
      catalog_course_id: catalogCourseId,
    });
  }

  /**
   * Returns all available communication plans.
   * @returns A Promise that resolves to an array of communication plans.
   */
  public async getCommunicationPlans() {
    return this.taskRequest(
      'getCommunicationPlans',
      {},
      'communication_plan',
      true
    );
  }

  public async getCountries() {
    return (await this.taskRequest('getCountries', {}, 'countries')).country;
  }

  public async getCourseCatalog(includeRetired: boolean = false) {
    return this.taskRequest(
      'getCourseCatalog',
      { include_retired: includeRetired },
      'course',
      true
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
    return this.taskRequest('getCourseInstance', { instance_id: instanceId });
  }

  public async getAllCustomFields(type?: CustomFieldsType) {
    return this.taskRequest('getAllCustomFields', { type }, 'custom_field');
  }

  public async getTermCourseInstances(termId: PopuliID) {
    return this.taskRequest(
      'getTermCourseInstances',
      { term_id: termId },
      'course_instance'
    );
  }

  public async getCourseInstanceAssignmentGroups(instanceId: PopuliID) {
    return this.taskRequest(
      'getCourseInstanceAssignmentGroups',
      { instance_id: instanceId },
      'assignment_group',
      true
    );
  }

  public async getTermStudents(
    termId?: PopuliID,
    params?: GetTermStudentsParams
  ) {
    return this.taskRequest(
      'getTermStudents',
      {
        term_id: termId,
        program_id: params?.programId,
        campus_id: params?.campusId,
        return_image_data: params?.returnImageData,
        page: params?.page,
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
    listElementName?: string,
    forceTopLevelArray?: boolean
  ) {
    let taskResult = await this._populiConnectionImpl.taskRequest(
      this._connectionInfo.schoolUrl,
      this._connectionInfo.accessKey,
      taskName,
      this._resultOptions,
      args
    );

    if (listElementName) {
      taskResult = this.retrieveElement(taskResult, listElementName);
    }

    if (forceTopLevelArray && !Array.isArray(taskResult)) {
      return [taskResult];
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
