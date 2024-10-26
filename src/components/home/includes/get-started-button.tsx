import Button from "@/sb-ui/button/button";
import Link from "next/link";

export default function GetStartButton() {
  return (
    <div className="mt-16">
      <div className="flex flex-row w-auto gap-12 ">
        <Link href={``}>
          <Button
            cls="w-auto h-10 text-2xl text-black rounded-md font-medium text-right border border-[#999999]"
            text="Get Started"
            // handleRedirect={handleRedirect}
          />
        </Link>
        <Link href={``}>
          <Button
            cls="w-auto h-10 text-2xl text-black rounded-md font-medium text-right border border-[#999999]"
            text="Sign In or Register"
            // handleRedirect={handleRedirect}
          />
        </Link>
      </div>
    </div>
  );
}
