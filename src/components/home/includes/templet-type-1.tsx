import { Title } from "@/components/common/title-comp";
import Button from "@/sb-ui/button/button";
import { ButtonProps, ImagePropsType, TempletProps } from "@/store/interfaces/templete";
import imageKitLoader from "@/utils/image-kit-loader";
import Image from "next/image";
import Link from "next/link";

export default function TempletType1({
  title,
  sub_title,
  title_color,
  sub_title_color,
  section_color,
  images,
  buttons,
  steps_count,
  grid_height
}: TempletProps) {
  return (
    <div className={`flex flex-col pt-4 ${section_color}`}>
      {title && (
        <Title
          variant="h2"
          textStyle="primary"
          className={`text-[${title_color}] py-1 text-center px-6 md:px-4`}
        >
          {title}
        </Title>
      )}
      {sub_title && (
        <div className={`text-[${sub_title_color}]  text-center px-6 md:px-4`}>{sub_title}</div>
      )}
      {images && (
        <div className="flex flex-wrap place-content-center py-14 justify-evenly gap-8 lg:gap-0">
          {images.map((item: ImagePropsType, index: number) => {
            return (
              <div key={index} className="flex flex-col">
                <div
                  className={`w-[365px] h-[220px] md:w-80 ${grid_height ? `md-h-[${grid_height}px]` : "md:h-40"} relative rounded-xl mx-auto`}
                >
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
                    <span className="absolute size-14 top-0 left-5 md:left-4 lg:left-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#028391] bg-opacity-70 text-white text-3xl text-center font-semibold place-content-center rounded-full">
                      {index + 1}
                    </span>
                  )}
                </div>
                {item.title && (
                  <h2
                    className={`text-[#028391]  w-[365px] text-[1.15rem] py-1 text-center pt-5 lg:pt-4 px-8`}
                  >
                    {item.title}
                  </h2>
                )}

                {item.description && (
                  <p
                    className={`text-[${item.sub_title_color}] w-[365px] text-sm font-normal py-1 text-center pt-2 lg:pt-2`}
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
        <div className="flex flex-wrap place-content-center pb-6 gap-3 md:gap-6 lg:pt-6">
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
