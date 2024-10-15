import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [timeoutId, setTimeoutId] = useState(null);
  const inactivityLimit = 10 * 60 * 1000; // 10 minutos de inactividad (ajustable)

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    startInactivityTimer();  // Iniciar el temporizador de inactividad
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    clearTimeout(timeoutId);  // Limpiar el temporizador al cerrar sesión
  };

  // Iniciar o reiniciar el temporizador de inactividad
  const startInactivityTimer = () => {
    if (timeoutId) clearTimeout(timeoutId);  // Limpiar el temporizador existente
    const newTimeoutId = setTimeout(() => {
      logout();  // Cerrar sesión si se excede el tiempo de inactividad
    }, inactivityLimit);
    setTimeoutId(newTimeoutId);  // Guardar el ID del nuevo temporizador
  };

  // Detectar actividad del usuario y reiniciar el temporizador
  const handleUserActivity = () => {
    if (user) {
      startInactivityTimer();  // Reiniciar el temporizador si hay actividad
    }
  };

  // Monitorear eventos de actividad (teclado, mouse, etc.)
  useEffect(() => {
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('click', handleUserActivity);

    return () => {
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
