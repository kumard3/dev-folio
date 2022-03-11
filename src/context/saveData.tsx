import React, { createContext, useContext, useState } from "react";

export const SaveDataContext = createContext({});

export default function SaveDataProvider(props: any) {
  const [saveData, setSaveData] = useState("");

  return (
    <SaveDataContext.Provider value={{  saveData , setSaveData }}>
      {props.children}
    </SaveDataContext.Provider>
  );
}

export function useSaveData() {
  return useContext(SaveDataContext);
}
