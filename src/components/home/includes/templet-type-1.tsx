import Heading from "@/sb-ui/h1/h1";
import { ButtonProps, ImagePropsType, TemplateProps } from "@/store/interfaces/templete";
import Image from "next/image";
import Link from "next/link";

export default function TemplateType1({
  title,
  sub_title,
  title_color,
  sub_title_color,
  section_color,
  images,
  buttons,
  steps_count,
  grid_height
}: TemplateProps) {
  return (
    <div className={`flex flex-col ${section_color}`}>
      <Heading text={title} cls={`text-[${title_color ?? "#000000"}]`} />
      {sub_title && (
        <div className={`text-[${sub_title_color}]  text-center pt-1`}>{sub_title}</div>
      )}
      {images && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 px-12 md:px-0 gap-x-6 justify-center pt-8">
          {images.map((item: ImagePropsType, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col w-full min-w-[260px] max-w-[320px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[240px] mx-auto"
              >
                <div
                  className={`relative w-full h-[240px] md:h-[200px] lg:h-[220px] xl:h-[240px] ${grid_height ? `md:h-[${grid_height}px]` : ""} rounded-xl mx-auto`}
                >
                  <Image
                    key={index}
                    src={item.image_link}
                    alt={""}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    objectFit="cover"
                    className="rounded-xl"
                    objectPosition="top"
                    onError={(e) => {
                      console.error("Image load failed:", e);
                    }}
                  />
                  {steps_count && (
                    <span className="absolute size-14 top-0 left-5 md:left-4 lg:left-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#028391] bg-opacity-70 text-white text-3xl text-center font-semibold place-content-center rounded-full mt-4">
                      {index + 1}
                    </span>
                  )}
                </div>
                {item.title && (
                  <h2
                    className={`text-[#028391] w-full text-[1.15rem] py-1 text-center pt-3 sm:pt-4 lg:pt-5 px-2 sm:px-4 md:px-6 lg:px-8`}
                  >
                    {item.title}
                  </h2>
                )}

                {item.description && (
                  <p
                    className={`text-[${item.sub_title_color}] w-full text-sm font-normal py-1 text-center pt-1 sm:pt-2 lg:pt-2 px-2 sm:px-4 md:px-6 lg:px-8`}
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
        <div className="flex flex-wrap place-content-center gap-3 md:gap-6 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
          {buttons.map((item: ButtonProps, index: number) => {
            return (
              <div key={index} className="">
                <Link href={item.link_to!}>
                  <button
                    key={index}
                    onClick={() => {}}
                    className={`bg-[${item.outlineButton ? "transprent" : item.color}] rounded-md min-h-16 px-10 text-[#FFF8EF] font-bold hover:opacity-80 ${item.outlineButton && "border-2"} border-[#999999] min-w-[220px] } `}
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
