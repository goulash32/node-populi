import { PopuliConnection } from '../dist';

jest.mock('node-fetch');

let pc;
beforeAll(() => {
  pc = new PopuliConnection(
    {
      schoolUrl: 'test.populiweb.com',
      accessKey: '123456',
    },
    {
      coerceNumbers: true,
      camelCase: true,
    }
  );
});

describe('gets all academic terms', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getAcademicTerms
    );
  });

  test('getAcademicTerms()', async () => {
    const academicTerms = await pc.getAcademicTerms();
    expect(academicTerms).toHaveLength(2);
  });
});

describe('gets all academic years', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getAcademicYears
    );
  });

  test('getAcademicYears()', async () => {
    const academicYears = await pc.getAcademicYears();
    expect(academicYears).toHaveLength(2);
  });
});

describe('gets aid application', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getAidApplication
    );
  });

  test('getAidApplication()', async () => {
    const aidApplication = await pc.getAidApplication(65);
    expect(aidApplication.id).toBe(65);
  });
});

describe('gets aid application for student aid year', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getAidApplicationForStudentAidYear
    );
  });

  test('getAidApplicationForStudentAidYear()', async () => {
    const aidApplication = await pc.getAidApplicationForStudentAidYear(65, 6);
    expect(aidApplication.id).toBe(65);
    expect(aidApplication.aidYearId).toBe(6);
  });
});

describe('gets all appeals', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(require('./fixtures/xml').getAppeals);
  });

  test('getAppeals()', async () => {
    const appeals = await pc.getAppeals();
    expect(appeals).toHaveLength(2);
  });
});

describe('gets an application', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getApplication
    );
  });

  test('getApplication()', async () => {
    const application = await pc.getApplication(54321);
    expect(application.id).toBe(54321);
  });
});

describe('gets application field options', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getApplicationFieldOptions
    );
  });

  test('getApplicationFieldOptions()', async () => {
    const options = await pc.getApplicationFieldOptions(54321);
    expect(options).toHaveLength(5);
  });
});

describe('gets application fields', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getApplicationFields
    );
  });

  test('getApplicationFields()', async () => {
    const options = await pc.getApplicationFields(54321);
    expect(options).toHaveLength(3);
  });
});

describe('gets application templates', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getApplicationTemplates
    );
  });

  test('getApplicationTemplates()', async () => {
    const options = await pc.getApplicationTemplates(54321);
    expect(options).toHaveLength(2);
  });
});

describe('gets applications', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getApplications
    );
  });

  test('getApplications()', async () => {
    /** Note: until xml2js can explicitly coerce single elements into an array,
     * the workaround is to do so manually */
    const applications = [
      await pc.getApplications(/* applicationTemplateId */ 112),
    ];
    expect(applications).toHaveLength(1);
    expect(applications[0].applicationTemplateId).toBe(112);
  });
});

describe('gets assignment comments', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getAssignmentComments
    );
  });

  test('getAssignmentComments()', async () => {
    const assignmentComments = await pc.getAssignmentComments(
      /* assignmentId */ 54321,
      /* personId */ 12345
    );
    expect(assignmentComments).toHaveLength(2);
  });
});

describe('gets available roles', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getAvailableRoles
    );
  });

  test('getAvailableRoles()', async () => {
    const availableRoles = await pc.getAvailableRoles();
    expect(availableRoles).toHaveLength(3);
  });
});

describe('gets all custom fields', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getAllCustomFields
    );
  });

  test('getAllCustomFields()', async () => {
    const customFields = await pc.getAllCustomFields();
    expect(customFields).toHaveLength(2);
  });
});

describe('gets all term students', () => {
  beforeEach(() => {
    require('node-fetch').__setResultBody(
      require('./fixtures/xml').getTermStudents
    );
  });

  test('getTermStudents()', async () => {
    const termStudents = await pc.getTermStudents();
    expect(termStudents).toHaveLength(2);
  });
});
