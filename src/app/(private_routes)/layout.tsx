"use client";
import Footer from "@/components/common/footer";
import AuthProvider from "@/contexts/auth-context";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <main className="flex-1">
        <AuthProvider>{children}</AuthProvider>
      </main>
    </div>
  );
}
