import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Settings from "pages/Settings";
import Patient from "pages/Patient";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.SIGNUP} element={<Signup />} />
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />} />
      <Route path={RoutePath.SETTINGS_PATIENT} element={<Patient />} />
    </Routes>
  );
};

export default Router;
