"use client";
import Footer from "@/components/common/footer";
import AuthProvider from "@/contexts/auth-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto">
      <AuthProvider>
        {children}
        <Footer _isBlack={false} />
      </AuthProvider>
    </div>
  );
}
