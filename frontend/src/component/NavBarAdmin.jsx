import { AppBar, Button, Toolbar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../redux/Slices/Global";

const NavBarAdmin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.global);
  const logout = () => {
    localStorage.clear();
    dispatch(setUser(undefined));
    dispatch(setToken(undefined));
  }
  return (
    <Box display={"flex"} width={"100%"} height={"100%"}>
      <Box flexGrow={1}>
        <AppBar>
          <Toolbar
            sx={{
              background: theme.palette.background.default,
              boxShadow: "none",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="outlined" onClick={() => logout()}>LogOut</Button>
            <Header title={import.meta.env.VITE_APP_NAME} />
            <Box
              sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "space-between",
              }}
            >
              <Typography>Name: {user?.name ? user.name : 'Admin'}</Typography>
              <Typography>Role: {user?.role}</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Box>
  );
};

export default NavBarAdmin;
