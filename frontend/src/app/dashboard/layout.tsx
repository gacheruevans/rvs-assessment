import React, { type ReactNode } from 'react'
import DashboardSidebar from './sidebar'

const DashboardLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <DashboardSidebar />
        {children}
    </div>
    
  )
}

export default DashboardLayout