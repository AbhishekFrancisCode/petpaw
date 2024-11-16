import React from "react";

type LineBreakProps = {
  text: string;
};

const LineBreak: React.FC<LineBreakProps> = ({ text }) => {
  // Split the text by newline and map each part to a JSX element
  const lines = text.split("\n").map((line, index) => (
    <div key={index} className="text-black text-center px-6 md:px-4">
      {line}
    </div>
  ));

  return <>{lines}</>;
};

export default LineBreak;
