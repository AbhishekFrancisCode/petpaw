export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
export const COOKIE_REF = process.env.NEXT_PUBLIC_COOKIE_REF;
export const AT_SECRECT = process.env.NEXT_PUBLIC_AT_SECRECT;
export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;
export const COOKIE_AUTH = process.env.NEXT_PUBLIC_COOKIE_AUTH;
export const COOKIE_NAME = process.env.NEXT_PUBLIC_COOKIE_NAME;
export const RAZOR_PAY_KEY = process.env.NEXT_PUBLIC_RAZOR_PAY_KEY;

export const baseURL =
  ENVIRONMENT === "dev"
    ? process.env.NEXT_PUBLIC_API_URL_DEV
    : process.env.NEXT_PUBLIC_API_URL_PROD;

export const IMG_LOAD_URL =
  ENVIRONMENT === "dev"
    ? process.env.NEXT_PUBLIC_URL_ENDPOINT
    : process.env.NEXT_PUBLIC_URL_ENDPOINT;
