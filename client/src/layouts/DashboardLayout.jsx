import React, { useEffect, useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

import {getCurrentUser} from "../services/auth.service"

const DashboardLayout = () => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await getCurrentUser()
        setUser(response.data.user)
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    };

    getUser()
  },[])

  return (
    <div className='min-h-screen w-full relative bg-black'>

        <Sidebar user={user} />

        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default DashboardLayout