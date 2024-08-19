import { ERROR_FETCHING_USERS, USERS } from "../actions/actionTypes"


export type StateType =  {
   users: User[],
   error: null | string
}
export type Action = {
  type: string,
  payload: {users: {data: User[]}, error: null | Object}
}
export type User = {
    name: string,
    age: number,
    company: string
}
export const initialState: StateType = {
    users: [],
    error: null
}

export const contextReducer = (state: StateType, action: Action):  StateType  => {
      const newUsers = action.payload.users?.data
      console.log("new users ==> ", newUsers);
    switch(action.type){
      case USERS:
        return {
            ...state,
            users: newUsers
        }
        case ERROR_FETCHING_USERS:
            return {
                ...state,
                error: JSON.stringify(action.payload.error)
            }
        default:
       return  initialState
    }
}