interface dataFormProps {
  text: string;
  id?: string;
  cls?: string;
  disabled?: {};
  handleRedirect?: () => void;
}

export default function Button({ text, id, cls, disabled, handleRedirect }: dataFormProps) {
  return (
    <button
      id={id}
      onClick={handleRedirect}
      className={`lg:px-4 py-0 min-h-6 lg:min-h-8 rounded-md font-bold ${cls}`}
    >
      {text}
    </button>
  );
}
