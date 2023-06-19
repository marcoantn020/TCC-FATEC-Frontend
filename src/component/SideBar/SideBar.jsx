import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import styles from './SideBar.module.css'

const SideBar = () => {
  const { user } = useStateContext()
  const [admin, setAdmin] = useState()

  useEffect(() => {
    if(user) {
      if(user.admin === 0) setAdmin(0)
      else setAdmin(1)
    }
  }, [user]);
  return (
    <>
      {/* usuario comun do sistema */}
      {admin === 0 && <div className={styles.SideBar}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/agendar">Agendar</Link>
        <Link to="/meus-agendametos">Meus Agendamentos</Link>
      </div>}

      {/* usuario admin do sistema */}
      {admin === 1 && <div className={styles.SideBar}>
        <Link to="/Home">Home</Link>
        {/* <Link to="/agendar">Agendar</Link>
        <Link to="/meus-agendametos">Meus Agendamentos</Link> */}
      </div>}
    </>
    
  )
}

export default SideBar