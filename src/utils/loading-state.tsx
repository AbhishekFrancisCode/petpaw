import { CSSProperties, useState } from "react";
import MoonLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#EE9422"
};
export default function LoadingState({ loading }: { loading: any }) {
  return (
    <div className="mr-6 py-2">
      <MoonLoader
        color={"#EE9422"}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
