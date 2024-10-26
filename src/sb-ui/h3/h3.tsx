interface dataFormProps {
  text: string;
  cls?: string;
}
export default function H3({ text, cls }: dataFormProps) {
  return <h1 className={`text-black text-2xl font-medium ${cls}`}>{text}</h1>;
}
