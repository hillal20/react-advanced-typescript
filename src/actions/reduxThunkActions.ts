

export const reduxThunkActions = ({data, error}: {data:{message: string, version: string} , error: Error}) => {
    if(error) {
        return { type: "REDUX_THUNK_ERROR", payload: { data: null, error }}
    }
    return { type: "REDUX_THUNK", payload: { data, error : null}}

}