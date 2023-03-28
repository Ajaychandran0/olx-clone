import { createContext, useState } from "react";


export const FirebaseContext = createContext(null)
export const AuthContest = createContext(null)

export default function Context({children}){
    const [user, setUser] = useState(null)

    return(
        <AuthContest.Provider value={{user, setUser}}>
            {children}
        </AuthContest.Provider>
    )
}