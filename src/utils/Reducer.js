import AsyncStorage from "@react-native-async-storage/async-storage";

export let initialState = {
    user: '',
    activities: []
}

const Reducer = (state , action) =>{
    const { type, payload } = action;

    switch(type){
        case "SET_STATE":
            return payload;
        case "ADD_ACTIVITY":
            let addState ={
                ...state,
                activities: payload.activites
            }
            AsyncStorage.setItem('state', JSON.stringify(addState))
            return addState;
        case "DELETE_ACTIVITY":
            let newState = {
                ...state,
                activities: payload.activities
            }
            AsyncStorage.setItem('state', JSON.stringify(newState));
            return newState;
        default:
            throw new Error("No case found in reducer");

    }
}

export default Reducer;