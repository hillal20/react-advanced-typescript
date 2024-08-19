import { createContext  } from "react";
import { Action, StateType } from "./contextReducer";


export const context  = createContext<{
    state: StateType;
    dispatch: React.Dispatch<Action>;
  }>({state: { users: [], error: null}, dispatch: () => null});