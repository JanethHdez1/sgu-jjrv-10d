import './App.css'
import TablaUsuario from './views/TablaUsuario'
import FormUsuario from './views/FormUsuario'
import FormUsuarioEditar from './views/FormUsuarioEditar';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <nav className="bg-body-tertiary navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="" className="navbar-brand">SGU-JJRV-10D</a>
        </div>
      </nav>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<TablaUsuario/>}/>
          <Route path="/agregar" element={<FormUsuario/>}/>
          <Route path="/editar/:id" element={<FormUsuarioEditar />} />
        </Routes>
      </div>
    </>
  )
}

export default App
