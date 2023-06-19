import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axiosClient from '../../../axios-client.js'
import { useStateContext } from '../../../context/ContextProvider'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  const { setNotification } = useStateContext()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
  const dateCurrent = new Date()

    const day = dateCurrent?.getDate() < 10 ? "0" + dateCurrent?.getDate() : dateCurrent?.getDate()
    const month = dateCurrent?.getMonth() < 10 ? "0" + (dateCurrent?.getMonth() + 1) : (dateCurrent?.getMonth() + 1)
      if (loading === true) {
        const dateNow = {"date_of_scheduling": day + "/" + month + "/" + dateCurrent?.getFullYear()}
        axiosClient.post('/podiatrist/schedule/list', dateNow)
        .then((response) => {
          setData(response.data)
          setLoading(false)
        })
        .catch(e => {
          console.log(e);
          setLoading(false)
        })
      }
    
  }, [ loading])

  if(loading) {
    return (
      <p>Carregando...</p>
    )
  }

  const handleCancel = (d, id) => {
    const payload = {
      "date_of_scheduling": d,
      "id_patient": id
    }
    axiosClient.post('/podiatrist/schedule/cancel', payload)
    .then(() => {
      setNotification("Consulta desmarcada com sucesso!")
    })
    .catch(e => {
      // setar um erro
    })
  }

  const handleConsultation = (active, id, date_of_scheduling) => {
    if(active) {
      navigate("/consultation", { state:{ id: id, date_of_scheduling}})
    } else {
      navigate("/patient", { state:{ id: id, date_of_scheduling}})
    }
  }

  return (
    <>
      <div className={styles.Home}>
        <h3>Agendamentos do dia: </h3>
        
          <div className={styles.container}>
            {
              data.map((patient, key) => (
                <div key={key}>
                  <div className={styles.box}> 
                  <p>{patient.patient}</p>
                    <b>Paciente:</b> {patient.patient} -
                    <b> Data e hora:</b> {patient.date_of_scheduling}
                    <button
                      onClick={() => {
                        handleConsultation(patient.is_active, 
                          patient.patient_id,
                          patient.date_of_scheduling)
                      }}
                      className={styles.button} 
                      type='button'>Realizar Consulta</button>
                    <button
                      onClick={() => {
                        handleCancel(patient.date_of_scheduling, patient.patient_id)
                      }}
                      className={styles.button} 
                      type='button'>Cancelar</button>
                  </div>
                </div>
              ))
            }
          </div>

      </div>
    </>
  )
}

export default Home