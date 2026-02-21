import { Routes, Route } from "react-router-dom"

import LandingPage from "./features/public/pages/LandingPage"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App
