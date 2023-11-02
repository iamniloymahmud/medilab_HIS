import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/Slices/Global";
import { useVerfiyMutation } from "../redux/Api/loginApi";

const UseAuth = ({children}) => {
  let user = localStorage.getItem("user");
  let token = localStorage.getItem("token");
  const [verfiy, { data, isLoading, error, isError, isSuccess }] =
    useVerfiyMutation();
  useEffect(() => {
    if(token){
      verfiy(JSON.parse(token))
    };
  }, []);
  const dispatch = useDispatch();
  if (isSuccess) {
    dispatch(setUser(JSON.parse(user)));
    dispatch(setToken(JSON.parse(token)));
  }
  if (isLoading) {
    return null;
  }
  return children;
};

export default UseAuth;
