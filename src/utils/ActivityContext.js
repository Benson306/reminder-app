import { createContext, useContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./Reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ActivityContext = createContext(initialState);

export const ActivityProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(reducer, initialState);
    const navigation = useNavigation();

    useEffect(()=>{
        const fectchActivities = async () =>{

            const storedState = await AsyncStorage.getItem('state');

            if(storedState !== null){
                dispatch({ type: "SET_STATE", payload: JSON.parse(storedState)});
            }
        };
        fectchActivities();
        
    },[]);


    const addActivity = (activity)=>{

        let updatedActivities = state.activities.concat(activity);

        dispatch({
            type:"ADD_ACTIVITY",
            payload:{
                activities: updatedActivities
            }
        })

        Alert.alert('Success', "Activity Has Been Addded",[
            { text: 'OK', onPress: ()=>{ navigation.navigate("Home") }}
        ])
    }

    const deleteActivity = (id)=>{

        let updatedActivities = state.activities.filter(currentActivity =>
            currentActivity.id != id
        )

        dispatch({
            type: "DELETE_ACTIVITY",
            payload:{
                activities: updatedActivities
            }
        })
    }

    let value ={
        user: state.user,
        activities: state.activities,
        addActivity,
        deleteActivity
    }

    return <ActivityContext.Provider value={value}>
        { children }
    </ActivityContext.Provider>
}

const useActivity = () =>{
    const context = useContext(ActivityContext);

    if(context === 'undefined'){
        throw new Error("useActivity must be used within ActivityContext")
    }

    return context;
}
export default useActivity;