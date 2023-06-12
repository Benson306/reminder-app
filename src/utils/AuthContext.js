import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [name, setName] = useState(null);

    const addName = (name) =>{
        console.log(name);
        setName(name);
        AsyncStorage.setItem('name', name);
    }

    const isNameSet = async () =>{
        try{
            let name = await AsyncStorage.getItem('name');

            if(name){
                setName(name);
            }
        }
        catch(e){
            console('Setting Name Gives An Error');
        }
    }

    useEffect(()=>{
        isNameSet();
    },[]);

    return ( 
        <AuthContext.Provider value={{ name, addName}}>
            { children }
        </AuthContext.Provider>
     );
}
 