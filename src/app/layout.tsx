import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ReduxWrapper from "../store/redux-wrapper";
import { ToastContainer } from "react-toastify";
import OfferBanner from "@/components/common/offer_strip";
import ConditionalHeaderWrapper from "@/components/common/ConditionalHeaderWrapper";
import AuthProvider from "@/contexts/auth-context";

const poppins = Inter({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Pawtful",
  description: "pawtful.com"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#FFF8EF]`}>
        <AuthProvider>
          <ConditionalHeaderWrapper>
            <ReduxWrapper>{children}</ReduxWrapper>
          </ConditionalHeaderWrapper>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
