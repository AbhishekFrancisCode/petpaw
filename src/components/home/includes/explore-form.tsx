export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-[34px] lg:text-5xl text-black font-medium lg:leading-[67.20px] pt-9 lg:pt-12 pb-2 lg:pb-4 text-center">
      {title}
    </div>
  );
}
