import React,{createContext, useState} from "react";

const ProfileContext = createContext();

const ProfileProvider  = ({Children}) => {
    const [profile,setprofile] = useState([]);
    return(
        <ProfileContext.Provider value={[profile,setprofile]}>
            {Children}
        </ProfileContext.Provider>
    )
}

export {ProfileContext,ProfileProvider}
