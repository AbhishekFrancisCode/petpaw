import { COOKIE_NAME } from "@/config";
import { Formdata } from "@/store/interfaces/form-data";
import { User } from "@/store/interfaces/user";
import { getCookieValue, sbCreateTempInfo } from "@/utils/session";
import { getCookie } from "cookies-next";
import React from "react";

export type UserDataContextType = {
  userData: User;
  formdata: Formdata;
  updateUserData: (a: User) => void;
  updateFormdata: (a: Formdata) => void;
};

export const UserDataContext = React.createContext<UserDataContextType | null>(null);

const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
  const cookie = getCookie(COOKIE_NAME!);
  const ck: User = cookie ? getCookieValue() : {};

  const [userData, setUserData] = React.useState<User>({});
  const [formdata, setFormdata] = React.useState<Formdata>({});

  const updateUserData = (data: User) => {
    setUserData((prev) => ({ ...prev, ...data }));
    let x = { ...userData, ...data };
    // sbCreateTempInfo(x);
    // console.log(x);
  };

  const updateFormdata = (data: Formdata) => {
    setFormdata((prev) => ({ ...prev, ...data }));
    let x = { ...formdata, ...data };
    // sbCreateTempInfo(x);
    console.log(x);
  };

  return (
    <UserDataContext.Provider value={{ userData, formdata, updateUserData, updateFormdata }}>
      {children}
    </UserDataContext.Provider>
  );
};
export default UserDataProvider;
