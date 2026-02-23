import { Outlet } from "react-router-dom"

import DashboardNav from "../features/dashboard/components/DashboardNav"
import SideBar from "../features/dashboard/components/SideBar"

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNav />

      <div className="w-full flex">
        <SideBar />

        <div className="w-full h-screen overflow-y-scroll pt-24 pb-10 px-8 bg-gray-50">
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
