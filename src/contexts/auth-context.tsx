import { COOKIE_NAME } from "@/config";
import { getCookieValue } from "@/utils/session";
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { authFirebase } from "../store/firebase";

export interface AuthType {
  email: string;
  id: string;
  image: string;
  name: string;
  phone: string;
}

export type AuthContextType = {
  auth: any;
  googleSignIn: () => void;
  logOut: () => void;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const cookie = getCookie(COOKIE_NAME!);
  // const ck: AuthType = cookie ? getCookieValue() : {};
  const [auth, setAuth] = React.useState<any>();
  //   {
  //   id: ck.id || "",
  //   name: ck.name || "",
  //   email: ck.email || "",
  //   phone: ck.phone || "",
  //   image: ck.image || "",
  // }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authFirebase, provider);
  };

  const logOut = () => {
    signOut(authFirebase);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, (currentUser) => {
      setAuth(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, googleSignIn, logOut }}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
