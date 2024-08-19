
import useReduxThunkHook from '../actions/reduxThunkHook';
import { useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

const ReduxThunkComponent = ()=> {
    const params   = useParams();
    const data = useSelector((state)=> state )

       useReduxThunkHook()

    return <h3> **** Redux thunk component, data {JSON.stringify(data)} === path : {JSON.stringify(params)} *****</h3>
}

export default ReduxThunkComponent;