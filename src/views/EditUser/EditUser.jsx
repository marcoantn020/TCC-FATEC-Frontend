import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/userForm'
import StepByStep from './Steps/StepByStep'
import Address from './Steps/Address'
import DataGeneral from './Steps/DataGeneral'
import styles from './EditUser.module.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'

const formData = {
  "first_name": "",
  "last_name": "",
  "birth_date": "",
  "email": "",
  "genre": "",
  "zipcode": "",
  "city": "",
  "street": "",
  "number": "",
  "district": "",
  "practice_activity": "",
  "what_activity": ""
}

const EditUser = () => {
  const [userData, setUserData] =  useState()
  const [data, setData] =useState(formData)

  const { setNotification } = useStateContext()
  useEffect(() => {
    axiosClient.get('/patient/logged')
    .then((data) => {
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
    
    axiosClient.put("/patient/update", data)
      .then(() => {
        setNotification("Dados Atualizados com sucesso.")
      }).catch((err) => {
        console.log(err);
      })
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
            <span style={{ color: 'black'}}>Avançar</span>
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