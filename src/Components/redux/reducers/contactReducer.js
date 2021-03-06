const initialState = [
    {
        id: 0,
        name: "Caleb Bitiyong",
        number: 7062314249 ,
        email :"calebduniya45@gmail.com",

    },
    {
        id:1,
        name:"test name",
        number: 8953434 ,
        email :"test@test.com"
    }
]

const contactReducer =(state=initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state,action.payload]
            return state
        case "UPDATE_CONTACT":
            const updateState =state.map(contact=>contact.id===action.payload.id ?
                action.payload : 
                contact)
                state= updateState
                return state
        case "DELETE_CONTACT":
            const filterContact= state.filter(contact=>contact.id!==action.payload && contact)
            state= filterContact
            return state;
        default:
            return state;
    }
}

export default contactReducer;