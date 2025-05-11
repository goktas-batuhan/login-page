import LoginPage from "./Components/LoginPage.jsx"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route } from 'react-router-dom';
import Succes from "./Components/Success.jsx"

function App() {


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/succes" element={<Succes />} />
      </Routes>


    </>
  )
}


export default App
