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
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<NavBar />}>
              <Route path="/" element={<Navigate to={"/home"} />} replace />
              <Route path="/home" element={<Home />} />
              <Route path="/appointment" element={<Appointment />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
