import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      <h3>Page not Found - <Link to="/dashboard">Dashboard</Link></h3>
    </div>
  )
}

export default Notfound