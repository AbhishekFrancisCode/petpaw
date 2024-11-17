import { COOKIE_NAME } from "@/config";
import { User } from "@/store/interfaces/user";
import { getCookieValue, sbCreateTempInfo } from "@/utils/session";
import { getCookie } from "cookies-next";
import React from "react";

export type UserDataContextType = {
  userData: User;
  updateUserData: (a: User) => void;
};

export const UserDataContext = React.createContext<UserDataContextType | null>(null);

const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
  const cookie = getCookie(COOKIE_NAME!);
  const ck: User = cookie ? getCookieValue() : {};

  const [userData, setUserData] = React.useState<User>({});

  const updateUserData = (data: User) => {
    setUserData((prev) => ({ ...prev, ...data }));
    let x = { ...userData, ...data };
    sbCreateTempInfo(x);
    console.log(x);
  };

  return (
    <UserDataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
export default UserDataProvider;
