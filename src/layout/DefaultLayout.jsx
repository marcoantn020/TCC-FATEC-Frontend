import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import SideBar from '../component/SideBar/SideBar'
import { useStateContext } from '../context/ContextProvider'

const DefaultLayout = () => {
  const {token, user, notification, notificationError} = useStateContext()

  if (!token) {
    return <Navigate to="/login"/>
  }

  const onLogout = ev => {
    ev.preventDefault()
    localStorage.removeItem("ACCESS_TOKEN")
    window.location.reload();
  }
  
  return (
    <main className='default'>
      <header>
        <SideBar />
      </header>

      <div className="container">
        <div className='mini-header'>
          {user.name ? <span>{user.name}</span> : 'Sem Nome'} &nbsp;
          <span onClick={onLogout} >Logout</span>
        </div>
        <div>
          <Outlet />
        </div>
      </div>

      {notification && 
      <div className='popup'>
        {notification}
      </div>}

      {notificationError && 
      <div className='popup-error'>
        {notificationError}
      </div>}
    </main>
  )
}

export default DefaultLayout