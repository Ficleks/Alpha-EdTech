import { Routes, Route, Navigate } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Home } from '../pages/Home'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<h1>Error 404</h1>} />
  </Routes>
)
