import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './root'
import ErrorPage from './routes/ErrorPage'

import Landing from './routes/Landing/Landing'
import LoginSignin from './routes/LoginSignin/LoginSignin'
import HomePage from './routes/HomePage/HomePage'
import PersonalPage from './routes/PersonalPage/PersonalPage'
import UserProfile from './routes/UserProfile/UserProfile'

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
