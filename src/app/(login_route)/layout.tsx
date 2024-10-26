import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/config";
import { redirect } from "next/navigation";
import { URL_PATHS } from "@/constants/title-constants";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(COOKIE_NAME!);

  if (cookie) {
    redirect(URL_PATHS.ACCOUNT);
  } else {
    return <div>{children}</div>;
  }
}
