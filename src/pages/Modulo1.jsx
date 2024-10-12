import React from 'react';

function Modulo1() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-3 gap-4 h-full">
        <div className="col-span-2 bg-blue-300 p-4 rounded-lg flex items-center justify-center">
          <h2 className="text-lg font-semibold">Buen día, Alejandra</h2>
        </div>
        <div className="bg-blue-300 p-4 rounded-lg flex items-center justify-center">
          <h2 className="text-lg font-semibold">HH:MM</h2>
        </div>

        <div className="bg-blue-300 p-4 rounded-lg flex items-center justify-center">
          Promedio general del curso
        </div>
        <div className="bg-blue-300 p-4 rounded-lg flex items-center justify-center">
          Porcentaje de asistencia
        </div>
        <div className="bg-blue-300 p-4 rounded-lg flex items-center justify-center">
          Estadísticas
        </div>

        <div className="bg-blue-300 p-4 rounded-lg flex items-center justify-center">
          Porcentaje de estudiantes en riesgo
        </div>
        <div className="col-span-2 row-span-2 bg-blue-400 p-4 rounded-lg flex flex-col justify-between">
          <h2 className="text-lg font-semibold">Chat Edutrack</h2>
          <p className="mt-2">Hola Alejandra!...</p>
        </div>

        <div className="bg-blue-300 p-4 rounded-lg flex items-center justify-center">
          Cuadro
        </div>
      </div>
    </div>
  );
}

export default Modulo1;
