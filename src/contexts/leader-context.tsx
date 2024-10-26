import React from "react";

export interface LeaderType {
  showPriceModal: boolean;
  showTimingsModal: boolean;
  showPictureModal: boolean;
  showNewsLetterModal: boolean;
}

export type LeaderContextType = {
  leader: LeaderType;
  togglePriceModal: () => void;
  toggleTimingsModal: () => void;
  togglePictureModal: () => void;
  toggleNewsLetterModal: () => void;
};

export const LeaderContext = React.createContext<LeaderContextType | null>(null);

const LeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [leader, setLeader] = React.useState<LeaderType>({
    showPriceModal: false,
    showTimingsModal: false,
    showPictureModal: false,
    showNewsLetterModal: false
  });
  const togglePriceModal = () => {
    setLeader({
      showTimingsModal: false,
      showPictureModal: false,
      showPriceModal: !leader.showPriceModal,
      showNewsLetterModal: false
    });
  };
  const toggleTimingsModal = () => {
    setLeader({
      showPriceModal: false,
      showPictureModal: false,
      showTimingsModal: !leader.showTimingsModal,
      showNewsLetterModal: false
    });
  };
  const togglePictureModal = () => {
    setLeader({
      showPriceModal: false,
      showTimingsModal: false,
      showPictureModal: !leader.showPictureModal,
      showNewsLetterModal: false
    });
  };

  const toggleNewsLetterModal = () => {
    setLeader({
      showPriceModal: false,
      showTimingsModal: false,
      showPictureModal: false,
      showNewsLetterModal: !leader.showNewsLetterModal
    });
  };

  return (
    <LeaderContext.Provider
      value={{
        leader,
        togglePriceModal,
        toggleTimingsModal,
        togglePictureModal,
        toggleNewsLetterModal
      }}
    >
      {children}
    </LeaderContext.Provider>
  );
};
export default LeaderProvider;
