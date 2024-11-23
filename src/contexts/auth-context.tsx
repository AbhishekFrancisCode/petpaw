import { COOKIE_NAME } from "@/config";
import { getCookieValue } from "@/utils/session";
import { getCookie } from "cookies-next";
import React, { useContext, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../store/firebase";

export interface AuthType {
  email: string;
  id: string;
  image: string;
  name: string;
  phone: string;
}

export type AuthContextType = {
  user: any;
  googleSignIn: () => any;
  logOut: () => any;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const cookie = getCookie(COOKIE_NAME!);
  // const ck: AuthType = cookie ? getCookieValue() : {};
  const [user, setUser] = React.useState<any>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      return true;
    }).catch((error: any) => {
      return false;
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;

// Custom hook to use User Context
export const useUser = () => useContext(AuthContext);
