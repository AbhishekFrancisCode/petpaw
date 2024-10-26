export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
export const COOKIE_REF = process.env.NEXT_PUBLIC_COOKIE_REF;
export const AT_SECRECT = process.env.NEXT_PUBLIC_AT_SECRECT;
export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;
export const COOKIE_AUTH = process.env.NEXT_PUBLIC_COOKIE_AUTH;
export const COOKIE_NAME = process.env.NEXT_PUBLIC_COOKIE_NAME;
export const RAZOR_PAY_KEY = process.env.NEXT_PUBLIC_RAZOR_PAY_KEY;

export const SB_LINKEDIN = process.env.SB_LINKEDIN_LINK;
export const SB_TWITTER = process.env.SB_TWITTER_LINK;
export const SB_INSTAGRAM = process.env.SB_INSTAGRAM_LINK;
export const SB_FACEBOOK = process.env.SB_FACEBOOK_LINK;

export const baseURL =
  ENVIRONMENT === "dev"
    ? process.env.NEXT_PUBLIC_API_URL_DEV
    : process.env.NEXT_PUBLIC_API_URL_PROD;

export const meetDomain =
  ENVIRONMENT === "dev"
    ? process.env.NEXT_PUBLIC_MEET_DOMAIN_DEV
    : process.env.NEXT_PUBLIC_MEET_DOMAIN_PROD;

export const IMG_LOAD_URL =
  ENVIRONMENT === "dev"
    ? process.env.NEXT_PUBLIC_IMG_LOAD_URL_DEV
    : process.env.NEXT_PUBLIC_IMG_LOAD_URL_PROD;
