import { useEffect, useRef, useState } from 'react'
import { VscLock } from 'react-icons/vsc'
import axiosClient from '../../axios-client'
import styles from './UpdatePassword.module.css'

const UpdatePassword = () => {
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const [userData, setUserData] =  useState()
  const [message, setMessage] = useState(null)

  useEffect(() => {
    axiosClient.get('/patient/logged')
    .then((data) => {
      setUserData(data.data)
    })
    .catch(e => console.log(e))
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault() 

    userData.password = passwordRef.current.value
    userData.password_confirmation =passwordConfirmationRef.current.value
    axiosClient.put('/patient/update', userData)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 400) {
          setMessage(response.data.detail)
        } 
      })

  }

  return (
    <div className={styles.UpdatePassword}>
      <div className={styles.container}>
        <h2>Atualizar senha</h2>
        <form onSubmit={handleSubmit}>

        {message && 
        <div className='error'>
          <p>{message}</p>
        </div>}

          <div className="formControl">
              <VscLock fontSize={"1.2em"} />
              <input 
                required
                ref={passwordRef}
                type="text"
                // value={data.password || ""}
                // onChange={(e) => updateFieldHandler("password", e.target.value)}
                name="password"
                id="password"
                placeholder='sua senha'/>
          </div>
        
          <div className="formControl">
            <VscLock fontSize={"1.2em"} />
            <input 
              required
              ref={passwordConfirmationRef}
              type="text"
              // value={data.password_confirmation || ""}
              // onChange={(e) => updateFieldHandler("password_confirmation", e.target.value)}
              name="password_confirmation"
              placeholder='confirmar senha' />
          </div>

          <button>Atualizar</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePassword