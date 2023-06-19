import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'
import styles from './Login.module.css'

const Login = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()

  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const payload = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.access_token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 400) {
          setMessage(response.data.detail)
        } 
      })

  }

  return (
      <div className={styles.containerLogin}>
        <br /><br /><br /><br /><br />
        <div className={styles.login}>
        <h1>Login - Podologos</h1>
        {message && 
        <div className='error'>
          <p>{message}</p>
        </div>}

        <form onSubmit={handleSubmit}>
          <div className="formControl">
            <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
            <input ref={usernameRef} type="text" name='username' placeholder='nome de usuario'/>
          </div>

          <div className="formControl">
            <span className="pi pi-lock" style={{ fontSize: '1.2em'}}></span>
            <input ref={passwordRef} type="password" name='password' placeholder='senha'/>
          </div>

          <button>Login</button>
          <p>
            Não tem cadastro? <Link to="/signup">faça o seu agora mesmo.</Link>
          </p>

        </form>
      </div>
      </div>
  )
}

export default Login