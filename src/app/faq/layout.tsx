"use client";
import Footer from "@/components/common/footer";
import HeaderBlack from "@/components/common/header_black";
import HeaderGeneral from "@/components/common/header_general";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <HeaderGeneral />
      <main className="flex-grow">{children}</main>
      <Footer _isBlack={false} />
    </div>
  );
}
