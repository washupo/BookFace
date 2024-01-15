import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './root'
import ErrorPage from './pages/ErrorPage'

import Landing from './pages/Landing/Landing'
import LoginSignin from './pages/LoginSignin/LoginSignin'
import HomePage from './pages/HomePage/HomePage'
import PersonalPage from './pages/PersonalPage/PersonalPage'
import UserProfile from './pages/UserProfile/UserProfile'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "login",
        element: <LoginSignin />,
      },
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <PersonalPage />,
      },
      {
        path: "settings",
        element: <UserProfile />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
