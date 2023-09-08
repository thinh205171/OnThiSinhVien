export interface LoginData {
  username: string;
  password: string;
}

export interface UpdateData {
  fullName: string;
  email: string;
  schools: string;
}

export interface RegisterData extends UpdateData {
  username: string;
  password: string;
  phoneNumber: number;
}
