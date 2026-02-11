import { createContext, useState, useContext } from "react";
import api from "../services/Api";

const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [media, setMedia] = useState([]);

  const fetchMedia = async () => {
    try {
      const res = await api.get("/");
      setMedia(res.data.data || []);
      console.log(res.data.data);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MediaContext.Provider value={{ media, setMedia, fetchMedia }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => useContext(MediaContext);
