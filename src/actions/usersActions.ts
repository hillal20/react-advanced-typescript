import { ERROR_FETCHING_USERS, USERS } from "./actionTypes"



export const usersAction = ({ data , error}: {data: any , error: string}) => {
    console.log("error ==> ", error)
    console.log("data ===> ", data)
 if(error ) return {
    type:ERROR_FETCHING_USERS,
    payload : {users: [], error}
 }
 return {
    type:USERS,
    payload : {users: data, error: null}
 }
}