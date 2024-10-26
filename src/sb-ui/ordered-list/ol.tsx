const OL = ({ children }: { children: React.ReactNode }) => {
  return (
    <ol type="A" style={{ listStyleType: "upper-alpha" }}>
      {children}
    </ol>
  );
};

const LI = ({ children, value }: { children: React.ReactNode; value: any }) => {
  return <li value={value}>{children}</li>;
};

OL.LI = LI;

export default OL;
