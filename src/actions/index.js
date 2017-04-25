import axios from 'axios';
import { AUTH_USER,
         AUTH_ERROR
       } from './types';
import { browserHistory } from 'react-router';
const ROOT_URL = 'http';

export function signinUser({email,password}){
  return function(dispatch){
  //submit email, password to server.
  axios.post(`${ROOT_URL}/signin`, {email,password})
  .then(response =>{ 
    //if request is good...
    // - update state to indicate user is authenticated
    dispatch({type: AUTH_USER});
    //save jwt
    localStorage.setItem('token',response.data.token);
      // redirect to route '/feature
      browserHistory.push('/feature');


  })
  .catch(()=>{
    dispatch(authError('Bad Login Info'));
  });

}
}


export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
