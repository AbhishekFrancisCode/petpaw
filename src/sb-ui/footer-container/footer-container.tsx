export default function FooterContainer({ children }: { children: React.ReactNode }) {
  return <div className="[&_:is(p)]:pt-4">{children}</div>;
}
