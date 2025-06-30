import Image from "next/image";

interface TemplateProps {
  title: string;
  image: string;
  address: string;
  date: string;
  time: string;
}

export default function Eventemplet({ title, image, address, date, time }: TemplateProps) {
  return (
    <div className="flex justify-between p-6">
      <div className="flex basis-4/5 gap-6">
        <div className="flex flex-col place-content-center text-4xl text-[#999999]">
          <p className="w-[80%] text-right">{time}</p>
        </div>
        <div className="flex flex-col place-content-center text-[#999999]">
          <p>{title}</p>
          <p>{date}</p>
          <p>{address}</p>
        </div>
      </div>
      <div className="basis-1/5">
        <img
          src={image}
          alt={image}
          width={0}
          height={0}
          className={`rounded-xl object-fill size-28`}
        />
      </div>
    </div>
  );
}
