import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./components/HomePage"
import { AboutPage } from "./components/AboutPage"
import { LoginPage } from "./components/LoginPage"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
      <h1>Main App</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />
        
        {/* Para mostrar 404 */}
        {/* <Route path="/*" element={ <LoginPage /> } /> */}
        <Route path="/*" element={ <Navigate to="/about" /> } />


      </Routes>
    </>
  )
}

export default App
