import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NavBarAdmin from "./component/NavBarAdmin";
import Admin from "./pages/Admin";
import UseAuth from "./util/useAuth";
import PublicRoute from "./util/PublicRoute";
import PrivateRoute from "./util/PrivateRoute";
import Patient from "./pages/Patient";
import Reports from "./pages/Reports";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: mode },
        typography: { fontFamily: ["Source Sans Pro", "sans-serif"].join(",") },
      }),
    [mode]
  );
  return (
    <div className="app">
      (
      <HashRouter>
        <UseAuth>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route
                element={
                  <PublicRoute>
                    <NavBar />
                  </PublicRoute>
                }
              >
                <Route path="/" element={<Navigate to={"/home"} />} replace />
                <Route path="/home" element={<Home />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/contact_us" element={<ContactUs />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
              <Route
                element={
                  <PrivateRoute>
                    <NavBarAdmin />
                  </PrivateRoute>
                }
              >
                <Route path="/admin" element={<Admin />} />
                <Route path="/patient" element={<Patient />} />
                <Route path="/patient/:type" element={<Reports />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </UseAuth>
      </HashRouter>
      )
    </div>
  );
}

export default App;
