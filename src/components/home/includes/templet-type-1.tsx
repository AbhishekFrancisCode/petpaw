import Button from "@/sb-ui/button/button";
import imageKitLoader from "@/utils/image-kit-loader";
import Image from "next/image";
import Link from "next/link";

export interface ButtonProps {
  title: string;
  title_color?: string;
  link_to?: string;
  color?: string;
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
        <h3 className={`text-[${title_color}] text-3xl font-semibold py-1 text-center`}>{title}</h3>
      )}
      {sub_title && <div className="text-black text-center">{sub_title}</div>}
      {images && (
        <div className="flex flex-wrap place-content-center py-14 justify-evenly">
          {images.map((item: ImagePropsType, index: number) => {
            return (
              <div key={index} className="flex flex-col">
                {/* <p>{item.image_link}</p> */}
                {steps_count && (
                  <div
                    className={`text-black top-2 left-2 bg-[#FFF8EF] text-sm font-bold px-2 py-1 rounded-md mb-2`}
                  >
                    {"Step - " + (index + 1)} {/* Display index as badge */}
                  </div>
                )}
                <div className="w-80 h-44 rounded-md border-black relative">
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
                </div>
                {item.title && (
                  <p
                    className={`text-[${item.title_color}] w-80 text-base font-medium py-1 text-center pt-4`}
                  >
                    {item.title}
                  </p>
                )}

                {item.description && (
                  <p
                    className={`text-[${item.title_color}] w-80 text-base font-medium py-1 text-center pt-4`}
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
                    className={`text-[${item.title_color}] bg-[${item.color}] rounded-full min-h-16 px-10 border-2 border-black`}
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