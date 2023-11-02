import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link, Outlet } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const token = useSelector(state => state.global.token);
    const user = useSelector(state => state.global.user);
    const navigate = useNavigate();
    useEffect(() => {
      if(token){
        navigate(`/${user.role}`)
      }
    }, [token])
    
  return children;
}

export default PublicRoute