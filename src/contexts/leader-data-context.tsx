import { COOKIE_NAME } from "@/config";
import { copyObject } from "@/utils/json";
import { getCookieValue } from "@/utils/session";
import { time } from "console";
import { getCookie } from "cookies-next";
import React from "react";

export interface LeaderDataType {
  ID: string;
  about?: string;
  email?: string;
  family_name: string;
  image?: string;
  languages?: string;
  name: string;
  identifier?: string;
  phone: string;
  user_type: number;
  proceedings?: string;
  linked_in?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  short_about?: string;
  strength?: string;
  tags: string;
  what_to_except?: string;
  timings?: any;
  pricings?: any;
}

export type LeaderDataContextType = {
  LeaderData: LeaderDataType;
  updateLeaderData: (a: LeaderDataType) => void;
  updatePricing: (a: LeaderDataType) => void;
  updateTiming: (value: string, keyname: string) => void;
};

export const LeaderDataContext = React.createContext<LeaderDataContextType | null>(null);

const LeaderDataProvider = ({ children }: { children: React.ReactNode }) => {
  const cookie = getCookie(COOKIE_NAME!);
  const ck: LeaderDataType = cookie ? getCookieValue() : {};

  const [LeaderData, setLeaderData] = React.useState<LeaderDataType>({
    ID: ck.ID!,
    name: ck.name!,
    family_name: ck.family_name!,
    phone: ck.phone!,
    user_type: 1,
    tags: ""
  });

  const updateLeaderData = (obj: LeaderDataType) => {
    setLeaderData({
      ...obj
    });
  };

  const updatePricing = (price: any) => {
    const tmp = copyObject(LeaderData);

    setLeaderData({
      ...tmp,
      pricings: price
    });
  };

  const updateTiming = (timing: any) => {
    const tmp = copyObject(LeaderData);

    setLeaderData({
      ...tmp,
      timings: timing
    });
  };
  return (
    <LeaderDataContext.Provider
      value={{ LeaderData, updateLeaderData, updatePricing, updateTiming }}
    >
      {children}
    </LeaderDataContext.Provider>
  );
};
export default LeaderDataProvider;
