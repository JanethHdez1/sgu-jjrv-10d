import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsuarios, eliminarUsuario } from "../services/usuarioService";

export default function TablaUsuario() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const response = await obtenerUsuarios();
    setUsuarios(response.result || []);
  };

  const handleEliminar = async (id) => {
    if (!confirm("¿Seguro de eliminar este usuario?")) return;

    await eliminarUsuario(id);
    cargarDatos();
  };

  return (
    <div className="mx-auto mt-8 p-6 max-w-5xl bg-white rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Usuarios</h2>
          <p className="text-sm text-slate-500">Usuarios registrados</p>
        </div>

        <button
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md"
          onClick={() => navigate("/agregar")}
          style={{ background: 'linear-gradient(90deg,#0ea5a4 0%, #06b6d4 100%)', color: 'white' }}
        >
          Agregar Usuario
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border-slate-100 border">
        {/* Tabla con diseño alternativo: filas más separadas y columna 'Nombre' destacada */}
        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">Nombre</th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">Correo</th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">Teléfono</th>
              <th className="px-4 py-3 text-right text-xs font-medium tracking-wider text-slate-500 uppercase">Acciones</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {usuarios.map((u) => (
              <tr key={u.idUser} className="hover:bg-slate-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">{u.idUser}</td>

                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="flex-none flex items-center justify-center h-9 w-9 text-sm font-semibold text-white bg-gradient-to-br from-teal-300 to-teal-400 rounded-full">{(u.nombre || 'U').charAt(0).toUpperCase()}</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">{u.nombre} {u.apellidoP} {u.apellidoM}</div>
                      <div className="text-xs text-slate-500">{u.apellidoP ? `${u.apellidoP}` : ''}</div>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">{u.correo}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">{u.telefono}</td>

                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="inline-flex items-center gap-2 mr-2 px-3 py-1 text-sm rounded-md"
                    onClick={() => navigate(`/editar/${u.idUser}`)}
                    style={{ background: 'linear-gradient(90deg,#f59e0b 0%, #f97316 100%)', color: 'white' }}
                  >
                    Actualizar
                  </button>

                  <button
                    className="inline-flex items-center gap-2 px-3 py-1 text-sm text-red-600 bg-white rounded-md border-red-100 border hover:bg-red-50"
                    onClick={() => handleEliminar(u.idUser)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
