
export interface RegisterRequest {

  email: string;
  firstName: string;
  lastName: string;
  password: string;
  password2: string;

}

export interface RegisterResponse {
  success: true;
  message: string;
}

export interface RegisterForm {
  email: string;
  completeName : string;
  password: string;
  password2: string;

}