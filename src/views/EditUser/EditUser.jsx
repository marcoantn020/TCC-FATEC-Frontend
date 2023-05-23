import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/userForm'
import StepByStep from './Steps/StepByStep'
import Address from './Steps/Address'
import DataGeneral from './Steps/DataGeneral'
import styles from './EditUser.module.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import axiosClient from '../../axios-client'

const formData = {
  name: "",
  last_name: "",
  birth_date: "",
  email: "",
  genre: "",
  practice_activity: "",
  what_activity: "",
}

const EditUser = () => {
  const [userData, setUserData] =  useState()

  const [data, setData] =useState(formData)
  // const [message, setMessage] = useState(null)

  useEffect(() => {
    axiosClient.get('/patient/logged')
    .then((data) => {
      console.log(data.data);
      setUserData(data.data)
    })
    .catch(e => console.log(e))
  }, [])


  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <DataGeneral data={data} userDataCurrent={userData} updateFieldHandler={updateFieldHandler} />,
    <Address data={data} userDataCurrent={userData} updateFieldHandler={updateFieldHandler} />,
  ]

  const { 
    currentStep,
    currentComponet,
    changeStep,
    isLastStep,
    isFirstStep } = useForm(formComponents)

  const handleSubmit = (ev) => {
    ev.preventDefault()
      setData({
        name: data.name ? data.name : userData.name,
        last_name: data.last_name ? data.last_name : userData.last_name,
        birth_date: data.birth_date ? data.birth_date : userData.birth_date,
        email: data.email ? data.email : userData.email,
        genre: data.genre ? data.genre : userData.genre,
        practice_activity: data.practice_activity ? data.practice_activity : userData.practice_activity,
        what_activity: data.what_activity ? data.what_activity : userData.what_activity,
      })
    console.log(data)
  }

  return (
    <>
      <div className={styles.EditUser}>

      <h2>Editar Dados</h2>
      <br />
      {/* {message && 
        <div className='error'>
          <p>{message}</p>
        </div>} */}

      <StepByStep currentStep={currentStep} />

      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className={styles.inputsContainer}>
          {currentComponet}
        </div>

      <div className={"actions"}>
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
      </form>
      </div>
    </>
  )
}

export default EditUser