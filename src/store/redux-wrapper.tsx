"use client";

import ReduxProvider from "@/store/provider";

const ReduxWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};
export default ReduxWrapper;
