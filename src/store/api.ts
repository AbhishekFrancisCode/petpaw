import axios from "axios";
import { COOKIE_AUTH, COOKIE_NAME, COOKIE_REF, baseURL } from "../config";
import { getCookieValue, logout } from "@/utils/session";
import { URL_PATHS } from "@/constants/title-constants";
import { sbToaster } from "@/utils/sb-toaster";
import { getCookie } from "cookies-next";

export const ApiClient = () => {
  // Create a new axios instance
  const api = axios.create({
    baseURL: "URL",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  // Add a request interceptor to add the JWT token to the authorization header
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(COOKIE_AUTH!);
      // const token = getCookie(COOKIE_AUTH!);
      if (token) {
        // config.headers.Token = token;
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Add a response interceptor to refresh the JWT token if it's expired
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      // const refreshToken = getCookie(COOKIE_REF!);

      // If the error is a 401 and we have a refresh token, refresh the JWT token
      if (
        error.response.status === 401 &&
        localStorage.getItem(COOKIE_REF!)
        // refreshToken
      ) {
        // const id = localStorage.getItem("id");
        const refreshToken = localStorage.getItem(COOKIE_REF!);

        // const ck = JSON.parse(ckData!);
        const ck = getCookieValue();
        let data = JSON.stringify({
          id: ck.id,
          refresh_token: refreshToken
        });

        // REFRESHING_TOKEN_API
        return await post("auth/refresh-token", data)
          .then(async (response) => {
            localStorage.setItem(COOKIE_AUTH!, response.auth_token);
            localStorage.setItem(COOKIE_REF!, response.refresh_token);

            // Re-run the original request that was intercepted
            originalRequest.headers.Authorization = `Bearer ${response.auth_token}`;

            return await api(originalRequest)
              .then((response) => {
                return response;
                // return response.data;
              })
              .catch((error) => {
                logout();
                window.location.href = URL_PATHS.LOGIN;
                console.log(error);
              });
            // return api(originalRequest)
          })
          .catch((err) => {
            logout();
            window.location.href = URL_PATHS.LOGIN;
            console.log(err);
          });
      }

      // sbToaster(error["response"]["data"].error);
      console.log(error["response"]["data"].error);

      // Return the original error if we can't handle it
      // return error["response"];
      return Promise.reject(error);
    }
  );

  const get = async (path: string) => {
    const response = await api.get(baseURL + path);
    return response.data;
  };

  const post = async (path: string, data: any) => {
    const response = await api.post(baseURL + path, data);
    return response.data;
  };

  const patch = async (path: string, data: any) => {
    const response = await api.patch(baseURL + path, data);
    return response.data;
  };
  const put = async (path: string, data: any) => {
    const response = await api.put(baseURL + path, data);
    return response.data;
  };

  const del = async (path: any) => {
    const response = await api.delete(baseURL + path);
    return response;
  };

  return {
    // login,
    get,
    post,
    patch,
    put,
    del
  };
};
