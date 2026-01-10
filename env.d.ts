declare namespace NodeJS {
  interface ProcessEnv {
    MFA_TOTP_SECRET?: string;
    MFA_USERNAME?: string;
  }
}   
