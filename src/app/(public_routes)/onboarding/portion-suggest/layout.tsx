"use client";
import Footer from "@/components/common/footer";
import HeaderGeneral from "@/components/common/header_general";

export default function SuggestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto">
      <HeaderGeneral />
      {children}
      <Footer _isBlack={false} />
    </div>
  );
}
