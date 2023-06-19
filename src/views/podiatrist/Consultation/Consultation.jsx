import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Consultation.module.css'
import { FiSend } from 'react-icons/fi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import ConsultationOne from './Steps/ConsultationOne'
import ConsultationTwo from './Steps/ConsultationTwo'
import { useForm } from '../../../hooks/userForm';
import axiosClient from '../../../axios-client'
import { useStateContext } from '../../../context/ContextProvider';
import StepByStep from './Steps/StepByStep';

const formData = {
  "id_patient": "",
  "left_foot_professional_observation": "",
  "right_foot_professional_observation": "",
  "type_pressure_left_foot": "",
  "type_pressure_right_foot": "",
  "left_foot_mono_filament_test": "",
  "right_foot_mono_filament_test": "",
  "left_foot_dermatological_pathology": "",
  "right_foot_dermatological_pathology": "",
  "pathology_present_in_nail_left_foot": "",
  "pathology_present_in_nail_right_foot": "",
  "performed_procedure": "",
  "date_of_scheduling": "",
}

const Consultation = () => {
  const location = useLocation();
  const [id] = useState(Number(location.state?.id))
  const [date_of_scheduling] = useState(location.state?.date_of_scheduling)

  const [data, setData] =useState(formData)
  const [message, setMessage] = useState(null)
  const { setNotification } = useStateContext()
  const navigate = useNavigate()

  const updateFieldHandler = (key, value) => {
    if(!data.id_patient) {
      setData({...data, "id_patient": id, "date_of_scheduling": date_of_scheduling})  
    }
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <ConsultationOne updateFieldHandler={updateFieldHandler} />,
    <ConsultationTwo updateFieldHandler={updateFieldHandler} />,
  ]

  const { 
    currentStep,
    currentComponet,
    changeStep,
    isLastStep,
    isFirstStep } = useForm(formComponents)


    const handleSubmit = (ev) => {
      ev.preventDefault()
      axiosClient.post('/podiatrist/medical_attendance', data)
        .then((response) => {
          setNotification("Consulta realizada com sucesso.")
          navigate("/home")
        })
        .catch((err) => {
          const response = err.response;
          console.log(response);
          if (response && response.status === 422) {
            setMessage(response.data.detail[0].msg)
            navigate("/consultation")
          } 
        })
  }

  return (
   <div className={styles.containerPatient}>
     <div className={styles.FormContainer}>
      <h2>Consulta</h2>
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

export default Consultation