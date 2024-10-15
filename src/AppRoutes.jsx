import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Modulo1 from './pages/Modulo1';
import Modulo2 from './pages/Modulo2';
import Modulo3 from './pages/Modulo3';
import Perfil from './pages/Perfil';
import Sidebar from './components/Sidebar';
import { useAuth } from './contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />; 

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />; 
  }

  return children;
};

function AppRoutes() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen">
      {user && <Sidebar />}
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/general"
            element={
              <ProtectedRoute allowedRoles={['profesor']}>
                <Modulo1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/particular"
            element={
              <ProtectedRoute allowedRoles={['profesor']}>
                <Modulo2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/documentacion"
            element={
              <ProtectedRoute allowedRoles={['profesor', 'alumno']}>
                <Modulo3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
