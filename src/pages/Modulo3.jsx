import React from 'react'
import DocumentacionAdmin from '../components/DocumentacionAdmin'
import DocumentacionUser from '../components/DocumentacionUser'
import { useAuth } from '../contexts/AuthContext'

function Modulo3() {

   const { user } = useAuth();

 return (
//  <div>
//     {
//          user.rol === 'admin' ? <DocumentacionAdmin user={user} /> : <DocumentacionUser user={user}/>
//     }
//  </div>
<div>
            {user.role === 'profesor' ? (
                <DocumentacionAdmin user={user} />
            ) : user.role === 'alumno' ? (
                <DocumentacionUser user={user} />
            ) : (
                <div>No tienes acceso a esta sección.</div>
            )}
        </div>
 )
}

export default Modulo3