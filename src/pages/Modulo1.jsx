import React from 'react';

function Modulo1() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4 h-auto'>
        <div className='col-span-2 bg-blue-300 p-4 rounded-lg'>
          <h2 className="text-lg font-semibold">Buen día, Alejandra</h2>
        </div>
        <div className='bg-blue-400 p-4 rounded-lg'>
          <h2 className="text-lg font-semibold">HH:MM</h2>
        </div>

        <div className='bg-blue-300 p-4 rounded-lg'>
          Promedio general del curso
        </div>
        <div className='bg-blue-400 p-4 rounded-lg'>
          Porcentaje de asistencia
        </div>
        <div className='bg-blue-500 p-4 rounded-lg'>
          Estadísticas
        </div>

        <div className='bg-blue-300 p-4 rounded-lg'>
          Porcentaje de estudiantes en riesgo
        </div>
        <div className='col-span-2 row-span-2 bg-blue-500 p-4 rounded-lg'>
          <h2 className="text-lg font-semibold">Chat Edutrack</h2>
          <p className="mt-2">Hola Alejandra!...</p>
        </div>

        <div className='bg-blue-500 p-4 rounded-lg'>
          Cuadro
        </div>
      </div>
    </div>
  );
}

export default Modulo1;
