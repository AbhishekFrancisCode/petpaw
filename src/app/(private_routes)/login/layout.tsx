"use client";
import AuthProvider from "@/contexts/auth-context";
import UserDataContext from "@/contexts/userdata-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <UserDataContext>
        <div>{children}</div>;
      </UserDataContext>
    </AuthProvider>
  );
}
