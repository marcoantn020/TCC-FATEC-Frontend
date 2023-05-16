import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Signup.module.css'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from './Steps/UserForm';
import { useForm } from '../../hooks/userForm';
import StepByStep from './Steps/StepByStep';
import DataGeneral from './Steps/DataGeneral';
import Address from './Steps/Address';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';

const formData = {
  username: "",
  password: "",
  password_confirmation: "",
  name: "",
  last_name: "",
  birth_date: "",
  email: "",
  genre: "",
  practice_activity: "",
  what_activity: "",
}
const Signup = () => {

  const [data, setData] =useState(formData)
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <DataGeneral data={data} updateFieldHandler={updateFieldHandler} />,
    <Address data={data} updateFieldHandler={updateFieldHandler} />,
  ]

  const { 
    currentStep,
    currentComponet,
    changeStep,
    isLastStep,
    isFirstStep } = useForm(formComponents)

    const login = (data) => {
      const payload = {
        username: data.username,
        password: data.password
      }

      axiosClient.post('/login', payload)
      .then(( { data } ) => {

        setUser(data.user)
        setToken(data.access_token);
      })
    }

    const handleSubmit = (ev) => {
      ev.preventDefault()
      const birth_date_string = String(data.birth_date).split("-")
      const dateStringBith = birth_date_string[2] + "/" + birth_date_string[1] + "/" + birth_date_string[0]

      if(data.practice_activity === 1) {
        data.practice_activity = true
      } else {
        data.practice_activity = false
      }
      axiosClient.post('/patient/create', {...data, birth_date: dateStringBith})
        .then(() => {
          login(data)
        })
        .catch((err) => {
          const response = err.response;
          console.log(response);
          if (response && response.status === 400) {
            setMessage(response.data.detail)
          } 
        })
  }

  return (
   <div className={styles.containerSignup}>
     <div className={styles.FormContainer}>
      <h2>Novo Usuario</h2>
      <br />
      {message && 
        <div className='error'>
          <p>{message}</p>
        </div>}

      <StepByStep currentStep={currentStep} />

      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className={styles.inputsContainer}>
          {currentComponet}
        </div>

      <div className={styles.actions}>
        {!isFirstStep && (
          <button type="button" onClick={() => changeStep(currentStep - 1)}>
            <GrFormPrevious />
            <span>Voltar</span>
          </button>
        )}

        {!isLastStep ? (
          <button type="submit">
            <span>Avançar</span>
            <GrFormNext />
          </button>
        ) : (
          <button onClick={handleSubmit} type="button">
            <span>Enviar</span>
            <FiSend />
          </button>
        )}
      </div>
      <p>
        <Link to="/login">Login</Link>
      </p>
      </form>
    </div>
   </div>
  )
}

export default Signup