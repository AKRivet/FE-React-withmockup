import { createBrowserRouter, Navigate } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import AppLayout from '../layouts/AppLayout'
import ProtectedRoute from './ProtectedRoute'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import DashboardPage from '../pages/DashboardPage'

export const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/analysis', element: <DashboardPage /> },
          { path: '/reports', element: <DashboardPage /> },
          { path: '/settings', element: <DashboardPage /> },
          { path: '/help', element: <DashboardPage /> },
        ],
      },
    ],
  },
])
