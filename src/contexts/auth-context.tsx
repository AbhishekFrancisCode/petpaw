import { COOKIE_NAME } from "@/config";
import { copyObject } from "@/utils/json";
import { getCookieValue } from "@/utils/session";
import { getCookie } from "cookies-next";
import React from "react";

export interface AuthType {
  exist: string;
  email: string;
  family_name: string;
  id: string;
  image: string;
  name: string;
  phone: string;
  company: string;
  about: string;
}

export type AuthContextType = {
  auth: AuthType;
  updateAuth: (a: AuthType) => void;
  updatePhone: (a: AuthType) => void;
  updateAuthFields: (value: string, keyname: string) => void;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const cookie = getCookie(COOKIE_NAME!);
  const ck: AuthType = cookie ? getCookieValue() : {};
  // const ck: AuthType = cookie ?    JSON.parse(cookie!) : {};
  const [auth, setAuth] = React.useState<AuthType>({
    id: ck.id || "",
    name: ck.name || "",
    family_name: ck.family_name || "",
    email: ck.email || "",
    phone: ck.phone || "",
    image: ck.image || "",
    company: ck.image || "",
    about: ck.image || "",
    exist: "1"
  });

  const updateAuth = (obj: AuthType) => {
    setAuth({
      ...obj
    });
  };


  
  const updateAuthFields = (value: string, keyname: string) => {
    const tmp = copyObject(auth);

    setAuth({
      ...tmp,
      [keyname]: value
    });
  };

  const updatePhone = (obj: AuthType) => {
    const tmp = copyObject(auth);
    const { phone } = obj;

    setAuth({
      ...tmp,
      phone
    });
  };

  return (
    <AuthContext.Provider value={{ auth, updateAuth, updatePhone, updateAuthFields}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
