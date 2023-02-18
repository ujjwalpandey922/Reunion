import { createContext, useContext, useState } from "react";
import House from "../API/House.json";
const InfoContext = createContext();

const InfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState(House.houses);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
};
export default InfoContextProvider;

export const useInfoContext = () => useContext(InfoContext);
