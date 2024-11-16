"use client";
import AuthProvider from "@/contexts/auth-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {" "}
      <div>{children}</div>;
    </AuthProvider>
  );
}
