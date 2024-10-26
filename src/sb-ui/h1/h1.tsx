interface dataFormProps {
  text: string;
  cls?: string;
}
export default function H1({ text, cls }: dataFormProps) {
  return <h1 className={`text-5xl text-black font-medium ${cls}`}>{text}</h1>;
}
