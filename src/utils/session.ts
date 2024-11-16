var jwt = require("jsonwebtoken");
import { AT_SECRECT, COOKIE_AUTH, COOKIE_NAME, COOKIE_REF, ENVIRONMENT, USER_DATA } from "@/config";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export function isCookieValid() {
  return getCookie(COOKIE_NAME!);
}

export function getCookieValue() {
  const token = getCookie(COOKIE_NAME!);
  jwt.verify(token, AT_SECRECT);
  try {
    return jwt.verify(token, AT_SECRECT);
  } catch (err) {
    console.log(err);
  }
}

// TODO get maxAge from backend.
export function sbCreateCookie(res: any) {
  const token = jwt.sign(res.data, AT_SECRECT);
  const maxAge = 60 * 60 * 24 * 30; // 30 days

  if (ENVIRONMENT == "prod") {
    setCookie(COOKIE_NAME!, token, { maxAge, domain: ".gina.com" });
  } else {
    setCookie(COOKIE_NAME!, token, { maxAge });
  }
  // setCookie(COOKIE_AUTH!, res.auth_token, { maxAge });
  // setCookie(COOKIE_REF!, res.refresh_token, { maxAge });
  localStorage.setItem(COOKIE_NAME!, token);
  localStorage.setItem(COOKIE_AUTH!, res.auth_token);
  localStorage.setItem(COOKIE_REF!, res.refresh_token);
}

export function sbCreateTempInfo(res: any) {
  localStorage.setItem(USER_DATA!, res);
}

export function logout() {
  if (ENVIRONMENT == "prod") {
    deleteCookie(COOKIE_NAME!, { domain: ".gina.com" });
  } else {
    deleteCookie(COOKIE_NAME!);
  }
  // deleteCookie(COOKIE_AUTH!);
  // deleteCookie(COOKIE_REF!);
  localStorage.removeItem(COOKIE_NAME!);
  localStorage.removeItem(COOKIE_AUTH!);
  localStorage.removeItem(COOKIE_REF!);
}
