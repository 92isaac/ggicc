import React from 'react'
import { auth } from '../config/firebase'

export const DashboardNavbar:React.FC = () => {
  return (
    <div className='p-4 shadow-md'>
        <h1>Welcome {auth.currentUser?.email}</h1>
    </div>
  )
}
