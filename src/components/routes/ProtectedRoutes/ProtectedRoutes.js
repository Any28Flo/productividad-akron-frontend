import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoutes = ({component: Component, auth, ...rest}) =>{
    const {isLogged} = useSelector(state => state.user);

    return(
        <Route
            {...rest}
            render={(props) =>
                isLogged ? <Component {...props} /> : <Redirect to='/' />
            }
        />
    )
}
export default ProtectedRoutes;