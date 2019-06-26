import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "../actions/types";

const initialState = {

	token:localStorage.getItem("token"),
	isAuthenticated:null,
	isLoading:false,
	user: null
}



export default function(state= initialState ,action){

	switch(action.type){
		case USER_LOADING:
				return{
					...state,
					isLoading:true
				}
		case USER_LOADED:
			return{
				...state,
				isLoading:false,
				isAuthenticated:true,
				user:action.payload

			}


		case AUTH_ERROR:
			localStorage.removeItem("token");
				return{
					...state,
					token:null,
					isAuthenticated:false,
					user:null,
					isLoading:false

				}

		default:
			return state;
	}

}