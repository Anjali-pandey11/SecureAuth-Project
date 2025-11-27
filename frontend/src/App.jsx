import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Homepage from './pages/Homepage'
import PrivateRoute from './routes/PrivateRoute'
const App = () => {
  return (
    <>
   <Routes>
    <Route path = "/" element={<Navigate to = "/home"/>}/>
    <Route path="/login" element={<Login/>}/>
     <Route path = "/home" element={<PrivateRoute></PrivateRoute>}>
     <Route path = "/home" element={<Homepage/>}/>
     </Route>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </>
  )
}

export default App