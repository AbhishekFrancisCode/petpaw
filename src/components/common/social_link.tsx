import Image from "next/image";
import Link from "next/link";
import linkedIn from "../../../public/images/svg/linked_in.svg";
import twitter from "../../../public/images/svg/x.svg";
import instagram from "../../../public/images/svg/instagram.svg";
import facebook from "../../../public/images/svg/facebook.svg";

import linkedIn_sb from "../../../public/images/svg/linked_in-sb.svg";
import instagram_sb from "../../../public/images/svg/instagram-sb.svg";
import facebook_sb from "../../../public/images/svg/facebook-sb.svg";

export default function SocialIcons() {
  return (
    <div className="my-4 border-gray-300 flex flex-row gap-4">
      <Link target="_blank" href={``}>
        <Image src={true ? linkedIn_sb : linkedIn} alt="linkedin" width={20} height={20} />
      </Link>

      <Link target="_blank" href={``}>
        <Image src={twitter} alt="x.com" width={20} height={20} />
      </Link>

      <Link target="_blank" href={``}>
        <Image src={true ? instagram_sb : instagram} alt="instagram" width={20} height={20} />
      </Link>

      <Link target="_blank" href={``}>
        <Image src={facebook_sb} alt="facebook" width={20} height={20} />
      </Link>
    </div>
  );
}
