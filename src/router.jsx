import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import GuestLayout from "./layout/GuestLayout";
import Signup from "./views/Signup/Signup";
import Dashboard from "./views/patient/Dashboard/Dashboard";
import EditUser from "./views/patient/EditUser/EditUser";
import UpdatePassword from "./views/patient/UpdatePassword/UpdatePassword";
import Calendar from "./views/patient/Calendar/Calendar";
import MySchedule from "./views/patient/MySchedule/MySchedule";
import Login from "./views/Login/Login";
import Notfound from "./views/Notfound/Notfound";
import Home from "./views/podiatrist/Home/Home";
import Consultation from "./views/podiatrist/Consultation/Consultation";
import Patient from "./views/podiatrist/Patient/Patient";

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
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/consultation',
        element: <Consultation />
      },
      {
        path: '/patient',
        element: <Patient />
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