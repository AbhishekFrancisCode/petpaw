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
      className={` ${cls} lg:px-4 py-0 min-h-6 lg:min-h-8 rounded-md font-normal text-[1.2rem] text-[#028391]`}
    >
      {text}
    </button>
  );
}
