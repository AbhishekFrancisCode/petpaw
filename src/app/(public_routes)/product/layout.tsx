"use client";
import Footer from "@/components/common/footer";
import HeaderBlack from "@/components/common/header_black";
import AuthProvider from "@/contexts/auth-context";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto bg-[#FFF8EF]">
      <AuthProvider>
        <HeaderBlack />
        {children}
        <Footer _isBlack={false} />
      </AuthProvider>
    </div>
  );
}
