import React from "react";

export interface GlobalType {
  showNewsLetterModal: boolean;
}

export type GlobalContextType = {
  toggleNewsLetterModal: () => void;
  getGlobalState: () => boolean;
};

export const GlobalContext = React.createContext<GlobalContextType | null>(null);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [global, setLeader] = React.useState<GlobalType>({
    showNewsLetterModal: false
  });

  const toggleNewsLetterModal = () => {
    console.log(global);
    setLeader({
      showNewsLetterModal: !global.showNewsLetterModal
    });
  };

  const getGlobalState = (): boolean => {
    return global.showNewsLetterModal;
  };

  return (
    <GlobalContext.Provider
      value={{
        getGlobalState,
        toggleNewsLetterModal
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
