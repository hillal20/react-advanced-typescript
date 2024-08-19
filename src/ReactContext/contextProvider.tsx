
import { context } from "./context"
import {  useReducer} from "react"
import { contextReducer , initialState} from "./contextReducer"

const ContextProvider = ({children}: {children: React.ReactNode}) => {

    const [state, dispatch] = useReducer(contextReducer, initialState);

return <context.Provider value ={{state,  dispatch}}>
{children}
</context.Provider>

}
export default ContextProvider