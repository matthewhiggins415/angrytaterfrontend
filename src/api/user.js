import axios from 'axios'
import apiUrl from '../apiConfig.js'

//login
export const signIn = (data) => {
  let { email, password } = data;
  return axios.post("http://localhost:5000" + '/login', {
    credentials: {
      email,
      password
    }
  })
}

//sign out 
export const signOut = (user) => {
  return axios.delete(apiUrl + '/logout', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}