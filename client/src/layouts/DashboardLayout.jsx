import { useEffect, useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

import {getCurrentUser} from "../services/auth.service"

const DashboardLayout = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await getCurrentUser()
        setUser(response.data.user)
      } catch {
        setUser(null)
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