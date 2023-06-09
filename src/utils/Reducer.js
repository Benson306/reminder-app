export const initialState = {
    user: '',
    activities: []
}

// {
//     title: null,
//     description: null,
//     date: '',
//     startTime:'',
//     endTime: '',
//     repeatEvery:{
//         sun:false,
//         mon: false,
//         tue: false,
//         wed: false,
//         thur: false,
//         fri: false,
//         sat: false
//     },
//     notifyBefore:''
// }

const Reducer = (action , state) =>{
    const { type, payload } = action;
    switch(type){
        case "SET_STATE":
            return payload;
        case "ADD_ACTIVITY":
            let addState ={
                ...state,
                activities: payload.activites
            }
            return addState;
        case "DELETE_ACTIVITY":
            let newState = {
                ...state,
                activities: payload.activities
            }
            return newState;
        default:
            throw new Error("No case found in reducer");

    }
}

export default Reducer;