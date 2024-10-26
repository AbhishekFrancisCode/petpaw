import { Bounce, toast } from "react-toastify";

export function checkError(error: any) {
  try {
    if (error?.response?.status !== 401) sbToaster(error["response"]["data"].error);
  } catch (e) {
    console.log(e);
  }
}

export function sbToaster(text: string, position?: string) {
  return toast.error(text, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
  });
}

export function sbToasterSuccess(text: string, position?: string) {
  toast.dismiss(); 
  return toast.success(text, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
  });
}
