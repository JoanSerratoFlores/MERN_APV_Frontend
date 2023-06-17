import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/nuevoPassword";
import AdministrarPacientes from "./paginas/administrarPacientes";
import { AuthProvider } from "./context/AuthProvider";
import { PacientesProvider } from "./context/PacientesProvider";
import CambiarPassword from "./paginas/CambiarPassword";
import EditarPerfil from "./paginas/EditarPerfil";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="/registrar" element={<Registrar />}></Route>
              <Route
                path="/olvide-password"
                element={<OlvidePassword />}
              ></Route>
              <Route
                path="/nuevo-password/:token"
                element={<NuevoPassword />}
              ></Route>
              <Route
                path="/confirmar/:id"
                element={<ConfirmarCuenta />}
              ></Route>
            </Route>

            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministrarPacientes />}></Route>
              <Route path="perfil" element={<EditarPerfil />}></Route>
              <Route path="actualizar-password" element={<CambiarPassword />}></Route>
            </Route>
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
