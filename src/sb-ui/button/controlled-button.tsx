export const ControlledButton = ({
  action,
  lable,
  type,
  cls
}: {
  action: any;
  lable: string;
  type: any;
  cls: any;
}) => {
  return (
    <button
      type={type}
      className={`${cls} min-w-20 h-[27px] px-3 py-1.5 text-[11px] font-bold leading-none rounded-md text-center`}
      onClick={action}
    >
      {lable}
    </button>
  );
};
