import { COOKIE_NAME } from "@/config";
import { ProfileDataType } from "@/store/interfaces/profile";
import { copyObject } from "@/utils/json";
import { getCookieValue } from "@/utils/session";
import { time } from "console";
import { getCookie } from "cookies-next";
import React from "react";


export type ProfileDataContextType = {
  ProfileData: ProfileDataType;
  updateProfileContext: (a: ProfileDataType) => void;
  updateProfileContextDynamic : (key: keyof ProfileDataType, value: string) => void;

};

export const ProfileDataContext = React.createContext<ProfileDataContextType | null>(null);

const ProfileDataProvider = ({ children }: { children: React.ReactNode }) => {
  const cookie = getCookie(COOKIE_NAME!);
  const ck = cookie ? getCookieValue() : {};

  const [ProfileData, setProfileData] = React.useState<ProfileDataType>({
    ID: ck.ID! || null,
    name: ck.name! || null,
    family_name:ck.family_name! || null,
    phone: ck.phone! || null,
    email:ck.email! || null,
  });

  const updateProfileContext = (obj: ProfileDataType) => {
    setProfileData({
      ...ProfileData,
      ...obj
    });
  };

  const updateProfileContextDynamic = (key: keyof ProfileDataType, value: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <ProfileDataContext.Provider
      value={{ ProfileData, updateProfileContext, updateProfileContextDynamic}}
    >
      {children}
    </ProfileDataContext.Provider>
  );
};
export default ProfileDataProvider;
