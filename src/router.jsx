import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import GuestLayout from "./layout/GuestLayout";
import Calendar from "./views/Calendar/Calendar";
import Dashboard from "./views/Dashboard/Dashboard";
import EditUser from "./views/EditUser/EditUser";
import Login from "./views/Login/Login";
import MySchedule from "./views/MySchedule/MySchedule";
import Notfound from "./views/Notfound/Notfound";
import Signup from "./views/Signup/Signup";
import UpdatePassword from "./views/UpdatePassword/UpdatePassword";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/user/edit',
        element: <EditUser />
      },
      {
        path: '/update/password',
        element: <UpdatePassword />
      },
      {
        path: '/agendar',
        element: <Calendar />
      },
      {
        path: '/meus-agendametos',
        element: <MySchedule />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  },

  {
    path: '*',
    element: <Notfound />
  }
]);

export default router;