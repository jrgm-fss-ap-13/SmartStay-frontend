

export interface VerifyEmailRequest {
  uid: string;
  token: string;
  
}

export interface VerifyEmailResponse {
  success: boolean;
  message: string;

}