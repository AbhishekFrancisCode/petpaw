import { percentage } from "@/utils/math.ops";
import { copyObject } from "@/utils/json";
import * as React from "react";

export interface MeetType {
  amount?: number;
  gst?: number;
  total?: number;
  duration?: number;
  meet_date?: string;
  meet_date_tmp?: string;
  meet_time?: string;
  question?: string;
  // question_two?: string;
  // question_three?: string;
  session_name?: string;
  price_id?: string;
}

export type MeetContextType = {
  meet: MeetType;
  updateService: (m: MeetType) => void;
  updateDate: (m: MeetType) => void;
  updateQuestion: (m: MeetType) => void;
};

export const MeetContext = React.createContext<MeetContextType | null>(null);

const MeetProvider = ({ children }: { children: React.ReactNode }) => {
  const [meet, setMeet] = React.useState<MeetType>({
    amount: 0,
    duration: 30,
    gst: 0,
    total: 0,
    meet_date: "",
    meet_date_tmp: "",
    meet_time: "",
    question: "",
    // question_two: "",
    // question_three: "",
    session_name: ""
  });

  const updateService = (obj: MeetType) => {
    const tmp = copyObject(meet);
    //
    const { amount, duration, price_id } = obj;
    // TODO current no GST support.
    const gst = 0; // percentage(18, amount!);
    const total = +amount! + +gst;

    setMeet({
      ...tmp,
      amount,
      gst,
      total,
      duration,
      price_id
    });
  };

  const updateDate = (obj: MeetType) => {
    const tmp = copyObject(meet);
    const { meet_date, meet_date_tmp, meet_time } = obj;

    setMeet({
      ...tmp,
      meet_date,
      meet_date_tmp,
      meet_time
    });
  };

  const updateQuestion = (obj: MeetType) => {
    const tmp = copyObject(meet);
    const {
      question
      // question_two,
      // question_three
    } = obj;

    setMeet({
      ...tmp,
      question
      // question_two,
      // question_three
    });
  };

  return (
    <MeetContext.Provider value={{ meet, updateService, updateDate, updateQuestion }}>
      {children}
    </MeetContext.Provider>
  );
};
export default MeetProvider;
