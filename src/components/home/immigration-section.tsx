import HeroTitle from "./includes/hero-title";
import GetStartButton from "./includes/get-started-button";
import LangingPageTemplet from "./includes/templet";
import immg from "../../../public/images/img/picture.png";
import immg1 from "../../../public/images/img/picture2.png";
import immg2 from "../../../public/images/img/picture3.png";

const sectionJson = [
  {
    title: "Our partner",
    image: immg,
    imagePosition: false,
    description:
      "Partner with us to offer products and services to our diverse group of members.",
    link_to: ""
  },
  {
    title: "Access Services",
    image: immg1,
    imagePosition: true,
    description:
      "Access services from different programs in Immigration, Travel, Health & Wellness",
    link_to: ""
  },
  {
    title: "Access Services",
    image: immg2,
    imagePosition: false,
    description:
      "Access services from different programs in Immigration, Travel, Health & Wellness ",
    link_to: ""
  }
];

export default function ImmigrationSection() {
  return (
    <div className="flex flex-col gap-24 mt-24">
      {sectionJson.map((item: any, i: number) => {
        return (
          <div key={i} className="flex sb-container place-items-center">
            <LangingPageTemplet
              title={item.title}
              image={item.image}
              imagePositionRight={item.imagePosition}
              description={item.description}
              link_to={item.link_to}
            />
          </div>
        );
      })}
    </div>
  );
}
