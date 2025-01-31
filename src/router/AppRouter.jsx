import { HashRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
};
