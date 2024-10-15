import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold">Bienvenido {user?.nombre} {user?.apellido} 👋🏻</h1>
      <p> Esto es home</p>
    </div>
  );
};

export default Home;
