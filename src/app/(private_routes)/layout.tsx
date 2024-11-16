import Footer from "@/components/common/footer";
import HeaderBlack from "@/components/common/header_black";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <main className="flex-1">
        <HeaderBlack />
        {children}
        <Footer _isBlack={false} />
      </main>
    </div>
  );
}
