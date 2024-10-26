import Image from "next/image";
import GetStartButton from "./get-started-button";

interface TempletProps {
  title: string;
  image: any;
  imagePositionRight: boolean;
  description: string;
  link_to: string;
}

export default function LangingPageTemplet({
  title,
  image,
  imagePositionRight,
  description,
  link_to
}: TempletProps) {
  return (
    <div className="flex flex-col">
      <p className="text-2xl text-black font-medium py-3">{title}</p>
      <div className={`${imagePositionRight ? "flex-row-reverse" : "" } flex w-full min-h-[750px] rounded-3xl border border-[#999999]`}>
        <div className={`${imagePositionRight ? "place-content-end" : ""} flex basis-1/2`}>
          <Image
            src={image}
            alt={image}
            width={0}
            height={0}
            className={`${imagePositionRight? "rounded-r-2xl text-right" : "rounded-l-3xl"} object-fill min-w-full`}
          />
          {/* <img src={image} alt={image} className="object-fill float-left"/> */}
        </div>
        <div className="flex flex-col basis-1/2 p-16">
          <p className="text-6xl text-[#666666]">{description}</p>
          <GetStartButton/>
        </div>
      </div>
    </div>
  );
}
