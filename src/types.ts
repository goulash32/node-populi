export class PopuliError extends Error {
  constructor(code: string, message: string) {
    super(message);

    this._code = code;
  }

  public get code() {
    return this._code;
  }

  private _code: string;
}

export type PopuliID = string | number;

type AddressType =
  | 'HOME'
  | 'WORK'
  | 'BILLING'
  | 'SCHOOL'
  | 'SHIPPING'
  | 'OTHER'
  | 'MAIN';

export type Address = {
  street: string;
  city: string;
  state?: string;
  postal?: string;
  country?: string;
  type?: AddressType;
  primary?: boolean;
  public?: boolean;
};

export type GetTermStudentsOptions = {
  programId?: PopuliID;
  campusId?: PopuliID;
  returnImageData?: boolean;
  page?: number;
};
