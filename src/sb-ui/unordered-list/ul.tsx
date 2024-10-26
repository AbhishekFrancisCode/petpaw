const UL = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>;
};

const LI = ({ children, value }: { children: React.ReactNode; value: any }) => {
  return <li value={value}>{children}</li>;
};

UL.LI = LI;

export default UL;
