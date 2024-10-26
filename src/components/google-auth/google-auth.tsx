"use client";
import { ApiClient } from "@/store/api";
import { sbCreateCookie } from "@/utils/session";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContext, AuthContextType, AuthType } from "@/contexts/auth-context";
import { useContext } from "react";

export default function SbGoogleAuth({ callback }: { callback: (data: any) => void }) {
  const api = ApiClient();
  const { updateAuth } = useContext(AuthContext) as AuthContextType;

  return (
    <GoogleOAuthProvider clientId="712896615724-ab59ba99a2c3qhlqeeim97mr9utdp3p1.apps.googleusercontent.com">
      <div className="flex justify-center">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const res: {
              data: AuthType;
              message: string;
              auth_token: string;
              refresh_token: string;
            } = await api.post(`users/create-user-google`, {
              token: credentialResponse.credential
            });

            if (res.message === "SUCCESS") {
              const { data } = res;
              sbCreateCookie(res);
              // localStorage.setItem("authToken", res.auth_token);
              // localStorage.setItem("refreshToken", res.refresh_token);

              // updating AuthContext
              updateAuth(data);

              callback(data);
            } else {
              // console.log(res);
              //TODO handle failure.
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}
