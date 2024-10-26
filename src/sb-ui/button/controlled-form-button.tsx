import React from "react";
import { ButtonWithLoading } from "./button-with-loading";

export const ControlledFormButton = ({
  cancle_action,
  submit_action,
  state,
  onboarding,
  type,
}: {
  cancle_action: Function;
  submit_action: Function;
  state?: any;
  onboarding?: boolean;
  type?:any;
}) => {
  return (
    <div className="flex place-content-center lg:place-content-end gap-4 my-6">
      <button
        type="button"
        onClick={() => cancle_action()}
        className="w-auto text-white bg-black opacity-50 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Discard
      </button>
      {/* <ButtonWithLoading type={type} onSubmit={submit_action()} isLoading={state} lable={onboarding ? "Submit" : "Save Changes"} cls={"w-auto text-white bg-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}/> */}
      <button
        type={type ? type : 'button' }
        onClick={() => submit_action()}
        className="w-auto text-white bg-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <div className="flex gap-2 items-center">
          <p>{onboarding ? "Submit" : "Save Changes"}</p>
        </div>
      </button>
    </div>
  );
};
