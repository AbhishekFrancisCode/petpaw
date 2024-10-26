import Button from "@/sb-ui/button/button";
import Link from "next/link";

export default function HeroButton({ isHeader }: { isHeader?: boolean }) {
  const buttonStyleHeader =
    "h-[36px] sb-gradient w-[172px] rounded-full text-[#E6E075FF] text-base font-medium";
  return (
    <Link href={``}>
      <Button text="Introduce" cls={`${isHeader ? buttonStyleHeader : buttonStyleHeader}`} />
    </Link>
  );
}
