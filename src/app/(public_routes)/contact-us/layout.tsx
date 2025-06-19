"use client";
import Footer from "@/components/common/footer";
import AuthProvider from "@/contexts/auth-context";

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto bg-[#FFF8EF]">
      <AuthProvider>
        {children}
        <Footer _isBlack={false} />
      </AuthProvider>
    </div>
  );
}