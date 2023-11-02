import {
  AppBar,
  Box,
  Toolbar,
  useTheme,
  Typography,
  IconButton,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Restore,
  Favorite,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../redux/Slices/Global";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";

const navList = [
  {
    text: "Home",
  },
  {
    text: "Appointment",
  },
  {
    text: "About Us",
  },
  {
    text: "Contact Us",
  },
];

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.global.user);
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
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
            {/* Right Side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "35px",
                  cursor: "pointer",
                  color: theme.palette.text.primary,
                }}
                component={"div"}
                onClick={() => navigate("/")}
              >
                {import.meta.env.VITE_APP_NAME}
              </Typography>
            </Box>
            {/* Middle Side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
              }}
            >
              {navList.map((data) => {
                const text = data.text.toLowerCase().split(" ").join("_");
                return (
                  <Typography
                    key={data.text}
                    component={"div"}
                    onClick={() => {
                      navigate(`/${text}`);
                    }}
                    sx={{
                      fontSize: 24,
                      color: theme.palette.text.primary,
                      cursor: "pointer",
                      borderBottom: active === `/${text}` ? 1 : null,
                    }}
                  >
                    {data.text}
                  </Typography>
                );
              })}
            </Box>
            {/* Left Side */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <IconButton onClick={() => dispatch(setMode())}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlined sx={{ fontSize: "25px" }} />
                ) : (
                  <LightModeOutlined sx={{ fontSize: "25px" }} />
                )}
              </IconButton>
              <Button variant="outlined" onClick={() => {
                setActive('signin');
                navigate('/signin');
              }}>Sign In</Button>
              <Button variant="outlined" onClick={() => {
                setActive('signup');
                navigate('/signup');
              }}>Register</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Outlet />
        <BottomNavigation>
          <BottomNav />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default NavBar;
