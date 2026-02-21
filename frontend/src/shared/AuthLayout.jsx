import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-24">
        <Outlet />
    </div>
  )
}

export default AuthLayout
