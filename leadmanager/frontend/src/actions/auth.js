import axios from "axios";
import { returnErrors } from "./messages";

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "./types";


export const loadUser = ()=> (dispatch, getState) =>{

	dispatch({
		type:USER_LOADING
	})

	const token = getState().auth.token;

	const config ={
			header:{
				'Content-Type':"application/json"
			}
	}

	if(token){
		config.headers['Authorization']= `Token ${token}`;
	}

axios.get('api/auth/user',config)
.then((res)=>{

	dispatch({
		type:USER_LOADED,
		payload:res.data
	})
}).catch((err)=>{
	dispatch(returnErrors(err.response.status,err.response.data))
	dispatch({
		type:AUTH_ERROR
	})
})


}