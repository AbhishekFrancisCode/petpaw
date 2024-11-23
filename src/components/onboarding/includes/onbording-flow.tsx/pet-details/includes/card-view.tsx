import Card from "@/components/common/card";
import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { SelectCardProps } from "@/store/interfaces/card";
import { useContext } from "react";
import { MdCheck } from "react-icons/md";
import { MdBrightness1 } from "react-icons/md";

interface CardViewProps {
  step: number;
  list: SelectCardProps[];
  field: any;
  handleClick: any;
}

const CardView = ({ step, list, field, handleClick }: CardViewProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;

  return list.map((item: SelectCardProps) => (
    <Card
      key={item.id}
      id={item.id}
      image={item.image}
      text={item.title}
      subtitle={item.subtitle}
      subtitle1={""}
      isSelected={step === item.id}
      onClick={() => {
        handleClick(item.id);
        field.onChange(item.title);
      }}
    />
  ));
};

export default CardView;
