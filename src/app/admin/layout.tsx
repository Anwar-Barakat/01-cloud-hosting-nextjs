import React from "react"
import AdminSidebar from "./AdminSidebar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:'Admin Dashboard',
  description:'Cloud Hosting Admin Dashboard'
}

interface AdminDashboardLayoutProps {
  children: React.ReactNode
}
const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden">
      <div className="overflow-height">
        <AdminSidebar />
      </div>
      <div className="overflow-height w-full lg:w-4/5 overflow-y-scroll">
        {children}
      </div>
    </div>
  )
}

export default AdminDashboardLayout
