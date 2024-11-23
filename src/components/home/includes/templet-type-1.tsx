import Button from "@/sb-ui/button/button";
import imageKitLoader from "@/utils/image-kit-loader";
import Image from "next/image";
import Link from "next/link";

export interface ButtonProps {
  title: string;
  title_color?: string;
  link_to?: string;
  color?: string;
  outlineButton?: boolean;
}

export interface ImagePropsType {
  title?: string;
  title_color?: string;
  image_link: string;
  link_to?: string;
  color?: string;
  description?: string;
}

interface TempletProps {
  title: string;
  title_color?: string;
  sub_title?: string;
  sub_title_color?: string;
  section_color?: string;
  buttons?: ButtonProps[];
  images?: ImagePropsType[];
  steps_count?: boolean;
}

export default function TempletType1({
  title,
  sub_title,
  title_color,
  sub_title_color,
  section_color,
  images,
  buttons,
  steps_count
}: TempletProps) {
  return (
    <div className={`flex flex-col pt-4 ${section_color}`}>
      {title && (
        <h3
          className={`text-[${title_color}] text-3xl font-semibold py-1 text-center px-6 md:px-4`}
        >
          {title}
        </h3>
      )}
      {sub_title && <div className="text-black text-center px-6 md:px-4">{sub_title}</div>}
      {images && (
        <div className="flex flex-wrap place-content-center py-14 justify-evenly gap-8 lg:gap-0">
          {images.map((item: ImagePropsType, index: number) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="w-[330px] h-[290px] md:w-80 md:h-44 relative rounded-xl">
                  <Image
                    key={index}
                    src={item.image_link}
                    alt={""}
                    fill
                    sizes=""
                    objectFit="cover"
                    className="rounded-xl"
                    objectPosition="top"
                    onError={(e) => {
                      console.error("Image load failed:", e);
                    }}
                  />
                  {steps_count && (
                    <span className="absolute size-20 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white text-5xl text-center font-semibold place-content-center rounded-full">
                      {index + 1}
                    </span>
                  )}
                </div>
                {item.title && (
                  <h2
                    className={`text-[${item.title_color}] w-[330px] text-[1.15rem] font-medium py-1 text-center pt-5 lg:pt-4 px-8`}
                  >
                    {item.title}
                  </h2>
                )}

                {item.description && (
                  <p
                    className={`text-[${item.title_color}] w-[330px] text-base font-normal py-1 text-center pt-2 lg:pt-4`}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {buttons && (
        <div className="flex flex-wrap place-content-center pb-6 gap-3 lg:pt-6 lg:gap-24">
          {buttons.map((item: ButtonProps, index: number) => {
            return (
              <div key={index} className="">
                <Link href={``}>
                  <button
                    key={index}
                    onClick={() => {}}
                    className={`bg-[${item.outlineButton ? "transprent" : item.color}] rounded-md min-h-16 px-10 text-[#ffffff] hover:opacity-80 ${item.outlineButton && "border-2"} border-[#999999] } `}
                  >
                    {item.title}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
