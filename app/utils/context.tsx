import React, { useContext } from "react";

export  const Context = React.createContext<any>(null);

export const useAsideShortContext = () =>{
    return useContext(Context)
}
export const useUserDataContext = () =>{
    return useContext(Context)
}

