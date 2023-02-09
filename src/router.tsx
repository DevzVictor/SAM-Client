import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";
import Signup from "pages/Signup";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.SIGNUP} element={<Signup />} />
      <Route path={RoutePath.HOME} element={<Home />} />
    </Routes>
  );
};

export default Router;
