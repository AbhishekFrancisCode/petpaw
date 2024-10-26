interface dataFormProps {
  label: string;
}

export default function Textarea({ label }: dataFormProps) {
  return (
    <label className="block">
      <span className="text-gray-700">{label} </span>
      <textarea className="form-textarea mt-1 block w-full h-24 border-2 border-zinc-100" />
    </label>
  );
}
