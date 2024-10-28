"use client";
import Footer from "@/components/common/footer";
import HeaderBlack from "@/components/common/header_black";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto">
      <HeaderBlack />
      {children}
      <Footer _isBlack={false} />
    </div>
  );
}
