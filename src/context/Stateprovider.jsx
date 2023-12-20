import { createContext, useContext } from "react";

const UserContext = createContext(null);

export const useSetvalue=()=>{
    return useContext(UserContext);
}

export default UserContext;