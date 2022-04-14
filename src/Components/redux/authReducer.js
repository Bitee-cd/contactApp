const initialState={
   isLoggedIn:false,
   user:null,
   token:null,

};

const authReducer=(state=initialState,action)=>{
        switch(action.type){
                case "SET_USER":
                       state={
                               isLoggedIn : true,
                               user: action.payload.user,
                               token : action.payload.token,
                        };
                        return state;
                case "RESET_USER":
                        state= initialState; 
                        return state;       
            default:
                return state;
        }
      
}


export default authReducer