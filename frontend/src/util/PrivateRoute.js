import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const token = useSelector(state => state.global.token);
    const user = useSelector(state => state.global.usre);
    const navigate = useNavigate();
    useEffect(() => {
      if(!token){
        navigate('/signin');
      }
    }, [token])
    
  return children;
}

export default PrivateRoute