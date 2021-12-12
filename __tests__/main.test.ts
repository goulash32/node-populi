import { PopuliConnection } from '../';

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
