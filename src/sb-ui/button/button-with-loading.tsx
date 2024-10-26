import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface ButtonProps {
  onSubmit: Function;
  isLoading: any;
  lable : string;
  cls? : any;
  type?: any;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "grey"
};

export const ButtonWithLoading = ({ onSubmit, isLoading, lable, cls, type }: ButtonProps) => {
  return (
    <button
      type={ type ? type : "button"}
      onClick={() => {
        onSubmit();
      }}
      className={`${cls}`}
    >
      <div className="flex gap-2 items-center">
        {<ClipLoader color={"white"} loading={isLoading} cssOverride={override} size={24} />}
        {!isLoading && <p>{lable}</p>}
      </div>
    </button>
  );
};
