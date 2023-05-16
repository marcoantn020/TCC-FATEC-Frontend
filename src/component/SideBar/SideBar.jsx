import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SideBar.module.css'

const SideBar = () => {
  
  return (
    <div className={styles.SideBar}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
    </div>
  )
}

export default SideBar