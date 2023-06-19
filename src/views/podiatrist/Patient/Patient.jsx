import React, { useState } from 'react'
import { FiSend } from 'react-icons/fi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/userForm';
import styles from './Patient.module.css'
import StepByStep from './Steps/StepByStep';
import PathologiesOne from './Steps/PathologiesOne';
import PathologiesTwo from './Steps/PathologiesTwo';
import PathologiesTree from './Steps/PathologiesTree';
import PathologiesFour from './Steps/PathologiesFour';
import axiosClient from '../../../axios-client'
import { useStateContext } from '../../../context/ContextProvider';

const formData = {
    "id_patient": "",
    "has_diabetes": "",
    "observations_diabetes": "",
    "have_hypertension": "",
    "observations_hypertension": "",
    "take_medicines": "",
    "observations_medicines": "",
    "allergic_to_medicine": "",
    "which_medicine": "",
    "have_cancer": "",
    "which_type_cancer": "",
    "has_pacemaker": "",
    "has_pin": "",
    "is_cadiaco": "",
    "have_foot_surgery": "",
    "which_foot": "pe direito",
    "about_the_foot_of_the_patient_has_callus": "",
    "about_the_foot_of_the_patient_has_callosity": "",
    "about_the_foot_of_the_patient_has_fissure": "",
    "about_the_foot_of_the_patient_has_dryness": "",
    "about_the_foot_of_the_patient_has_psoriasis": "",
    "about_the_foot_of_the_patient_has_pantar_wart": "",
    "about_the_nail_of_the_patient_has_onychocryptosis": "",
    "about_the_nail_of_the_patient_has_onycholysis": "",
    "about_the_nail_of_the_patient_has_onychomycosis": "",
    "about_the_nail_of_the_patient_has_onychophoresis": "",
    "sensitive_to_pain": "",
    "type_of_sock": "",
    "type_of_shoe": "",
    "shoe_number": ""
}

const Patient = () => {
  const location = useLocation();
  const [id] = useState(location.state.id)
  const [date_of_scheduling] = useState(location.state.date_of_scheduling)

  const [data, setData] =useState(formData)
  const [message, setMessage] = useState(null)
  const { setNotification } = useStateContext()
  const navigate = useNavigate()

  const updateFieldHandler = (key, value) => {
    if(!data.id_patient) {
      setData({...data, "id_patient": Number(id)})  
    }
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <PathologiesOne updateFieldHandler={updateFieldHandler} />,
    <PathologiesTwo updateFieldHandler={updateFieldHandler} />,
    <PathologiesTree updateFieldHandler={updateFieldHandler} />,
    <PathologiesFour updateFieldHandler={updateFieldHandler} />,
  ]

  const { 
    currentStep,
    currentComponet,
    changeStep,
    isLastStep,
    isFirstStep } = useForm(formComponents)


    const handleSubmit = (ev) => {
      ev.preventDefault()
      axiosClient.post('/podiatrist/register/pathology', data)
        .then((response) => {
          setNotification("Dados do paciente cadastrados com sucesso.")
          navigate("/consultation", { state:{ id: id, "date_of_scheduling": date_of_scheduling}})
        })
        .catch((err) => {
          const response = err.response;
          console.log(response);
          if (response && response.status === 422) {
            setMessage(response.data.detail[0].msg)
          } 
        })
  }

  return (
   <div className={styles.containerPatient}>
     <div className={styles.FormContainer}>
      <h2>Cadastro de patologias</h2>
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
      </form>
    </div>
   </div>
  )
}

export default Patient