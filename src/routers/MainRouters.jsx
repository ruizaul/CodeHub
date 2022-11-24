import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components";
import {
  LoginPage,
  DashboardPage,
  DailiesPage,
  EmpleadosPage,
  ReportesPage,
  UsuariosPage,
} from "../pages";

import { getToken } from "../utils/authServices";

export const MainRouters = (isDarkMode) => {
  const logged = getToken();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            element={logged ? <MainLayout /> : <Navigate to="/auth/login" />}
            isDarkMode={isDarkMode}
          >
            <Route index path="/*" element={<Navigate to="/" />} />
            <Route index path="/" element={<DashboardPage />} />
            <Route index path="/dailies" element={<DailiesPage />} />
            <Route index path="/reportes" element={<ReportesPage />} />
            <Route index path="/usuarios" element={<UsuariosPage />} />
            <Route index path="/empleados" element={<EmpleadosPage />} />
          </Route>

          <Route path="auth">
            <Route exact path="login" element={<LoginPage />} />
          </Route>

          <Route path="/*">
            <Route element={<Navigate to="/auth/login" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
