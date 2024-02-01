import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [ users , setUsers] = useState([
        { id : 1, name :"Bahri Can Öz", mail : "bahricanoz@gmail.com" , password : "123400" },
        { id : 2, name :"Sena Nur Özcan", mail : "senanurozcan@gmail.com" , password : "1232324400" },
        { id : 3, name :"Ömer Yurtkan", mail : "omerkayip@gmail.com" , password : "123432300" },
        { id : 4, name :"Ahmet Sefa", mail : "sefa@gmail.com" , password : "123404230" },

    ])

    const addUser = (data) => {
        setUsers((prev) => [data,...prev])
    }

    const values = {
        users,
        setUsers,
        addUser,
    }
    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}


export const UseContext = () => useContext(UserContext)


export default UserContext;