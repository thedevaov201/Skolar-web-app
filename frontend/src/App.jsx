import { Routes, Route } from "react-router-dom"

import LandingPage from "./features/public/pages/LandingPage"

import AuthLayout from "./shared/AuthLayout"
import LoginPage from "./features/auth/pages/LoginPage"
import SignupPage from "./features/auth/pages/SignupPage"

import DashboardLayout from "./shared/DashboardLayout"
import DashboardHomePage from "./features/dashboard/pages/DashboardHomePage"

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/dashboard" elemenet={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
      </Route>
    </Routes>
  )
}

export default App