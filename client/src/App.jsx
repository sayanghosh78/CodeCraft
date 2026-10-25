import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainlayout from "./layouts/Mainlayout"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import CoursesPage from "./pages/CoursesPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Dashboard from "./pages/Dashboard"
import DashboardLayout from "./layouts/DashboardLayout"
import Notfound404 from "./pages/Notfound404"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/signup" element={<Signup/>}/>


        <Route element={<Mainlayout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Route>

        <Route element={<DashboardLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*" element={<Notfound404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App