export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
export const COOKIE_REF = process.env.NEXT_PUBLIC_COOKIE_REF;
export const AT_SECRECT = process.env.NEXT_PUBLIC_AT_SECRECT;
export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;
export const COOKIE_AUTH = process.env.NEXT_PUBLIC_COOKIE_AUTH;
export const COOKIE_NAME = process.env.NEXT_PUBLIC_COOKIE_NAME;
export const RAZOR_PAY_KEY = process.env.NEXT_PUBLIC_RAZOR_PAY_KEY;
export const USER_DATA = process.env.NEXT_PUBLIC_PAWTFUL_PETINFO;

export const FIREBASE_APPID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
export const FIREBASE_APIKEY = process.env.NEXT_PUBLIC_FIREBASE_APIKEY;
export const FIREBASE_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_DOMAIN;
export const FIREBASE_PRIJECTID = process.env.NEXT_PUBLIC_FIREBASE_PRIJECT_ID;
export const FIREBASE_STORAGEBUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET;
export const FIREBASE_MESSAGINGSENDERID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
export const FIREBASE_MEASUREMENTID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

export const baseURL =
  ENVIRONMENT === "dev"
    ? process.env.NEXT_PUBLIC_API_URL_DEV
    : process.env.NEXT_PUBLIC_API_URL_PROD;

export const IMG_LOAD_URL =
  ENVIRONMENT === "dev"
    ? process.env.NEXT_PUBLIC_URL_ENDPOINT
    : process.env.NEXT_PUBLIC_URL_ENDPOINT;

export const BLOG_LOAD_URL =
  ENVIRONMENT === "dev" ? process.env.NEXT_PUBLIC_BLOG_URL_DEV : process.env.NEXT_PUBLIC_BLOG_URL_PROD;
