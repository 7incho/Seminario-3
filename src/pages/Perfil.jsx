import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Perfil() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  console.log(user);
  

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Perfil</h1>
      <p className="mb-6">Bienvenido a tu perfil.</p>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
        <ul>
          <li><strong>Nombre:</strong> {user?.nombre}</li>
          <li><strong>Apellido:</strong> {user?.apellido}</li>
          <li><strong>Email:</strong> {user?.email}</li>
          <li><strong>Rol:</strong> {user?.role}</li>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Perfil;
