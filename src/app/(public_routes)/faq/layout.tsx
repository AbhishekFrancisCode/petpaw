"use client";
import Footer from "@/components/common/footer";

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <main className="flex-grow">{children}</main>
      <Footer _isBlack={false} />
    </div>
  );
}
