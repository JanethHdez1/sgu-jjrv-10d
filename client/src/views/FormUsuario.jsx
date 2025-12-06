import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { crearUsuario } from "../services/usuarioService";

export default function FormUsuario() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    correo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await crearUsuario(form);

    alert("Usuario creado con éxito");
    navigate("/");
  };

  return (
    <div className="mx-auto mt-8 p-6 max-w-xl bg-slate-50 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Agregar Usuario</h3>
        </div>

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white rounded-md border-slate-200 border hover:bg-slate-50"
        >
          Página Principal
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm text-slate-700">Nombre</span>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="block mt-1 px-3 py-2 placeholder-slate-400 w-full text-sm rounded-lg border-slate-200 border focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-700">Apellido Paterno</span>
            <input
              type="text"
              name="apellidoP"
              value={form.apellidoP}
              onChange={handleChange}
              required
              className="block mt-1 px-3 py-2 placeholder-slate-400 w-full text-sm rounded-lg border-slate-200 border focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm text-slate-700">Apellido Materno</span>
            <input
              type="text"
              name="apellidoM"
              value={form.apellidoM}
              onChange={handleChange}
              className="block mt-1 px-3 py-2 placeholder-slate-400 w-full text-sm rounded-lg border-slate-200 border focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-700">Teléfono</span>
            <input
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
              className="block mt-1 px-3 py-2 placeholder-slate-400 w-full text-sm rounded-lg border-slate-200 border focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm text-slate-700">Correo</span>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
            className="block mt-1 px-3 py-2 placeholder-slate-400 w-full text-sm rounded-lg border-slate-200 border focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </label>

        <button
          type="submit"
          className="py-2 w-full text-white font-semibold rounded-lg shadow-sm" 
          style={{ background: 'linear-gradient(90deg,#0ea5a4 0%, #06b6d4 100%)' }}
        >
          Guardar Usuario
        </button>
      </form>
    </div>
  );
}