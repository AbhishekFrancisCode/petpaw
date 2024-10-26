import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  loading: () => <p>Editor Loading...</p>,
  ssr: false
});
import "react-quill/dist/quill.snow.css";
import "./rich-text.styles.css";

interface dataFormProps {
  label: string;
  value?: string;
  name?: string;
  errors: any;
  changeHandler: any;
  placeholder?: string;
  handleRichEditor?:any;
}
export default function SbEditor({
  label,
  value,
  name,
  errors,
  changeHandler,
  placeholder,
  handleRichEditor
}: dataFormProps) {

  const setValues = (val: string) => {
    changeHandler(name, val);
    handleRichEditor(name, val);
  };

  return (
    <div>
      <label className="block mb-2 opacity-80 text-black text-sm font-normal leading-tight">
        {label}
      </label>
      <ReactQuill
        className="min-h-auto  text-gray-900"
        // style={{
        //   marginBottom: "50px"
        // }}
        placeholder={placeholder}
        theme="snow"
        value={value}
        onChange={(value) => {
          if (value == "<p><br></p>") value = "";
          setValues(value);
        }}
      />
      {errors[name!] && (
        <p className="text-sm" style={{ color: "red" }}>
          This field is required
        </p>
      )}
    </div>
  );
}
