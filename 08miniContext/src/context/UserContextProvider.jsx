import UserContext from "./UserContext";
import React, { useState } from "react";

let UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;