import React from 'react'
import DocumentacionAdmin from '../components/DocumentacionAdmin'
import DocumentacionUser from '../components/DocumentacionUser'
import { useAuth } from '../contexts/AuthContext'

function Modulo3() {

   const { user } = useAuth();

 return (
 <div>
    {
         user.rol === 'admin' ? <DocumentacionAdmin user={user} /> : <DocumentacionUser user={user}/>
    }
 </div>
 )
}

export default Modulo3