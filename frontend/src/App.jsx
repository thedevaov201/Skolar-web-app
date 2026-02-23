import { Routes, Route } from "react-router-dom"

import LandingPage from "./features/public/pages/LandingPage"

import AuthLayout from "./shared/AuthLayout"
import LoginPage from "./features/auth/pages/LoginPage"
import SignupPage from "./features/auth/pages/SignupPage"

import DashboardLayout from "./shared/DashboardLayout"
import DashboardHomePage from "./features/dashboard/pages/DashboardHomePage"
import ArticlesPage from "./features/dashboard/pages/ArticlesPage"
import ResourcesPage from "./features/dashboard/pages/ResourcesPage"
import CommunityPage from "./features/dashboard/pages/CommunityPage"
import ProfilePage from "./features/dashboard/pages/ProfilePage"

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/home" element={<LandingPage />} />
      
      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App