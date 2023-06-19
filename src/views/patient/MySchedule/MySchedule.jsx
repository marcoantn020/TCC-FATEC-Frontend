import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axiosClient from '../../../axios-client';
import styles from './MySchedule.module.css'

const MySchedule = () => {
  const [finish, setFinish] = useState(0)
  const [data, setData] = useState([])

  const handleFinish = () => {
    if(finish === 0) setFinish(1)
    else setFinish(0)
  }
  useEffect(() => {
    axiosClient.get(`patient/schedule/list?finish=${finish}`)
    .then(( { data } ) => {
      setData(data)
      if(data.status === 401) {
        window.location.reload()
      }
    })
    .catch((err) => {
      setData([])
      const response = err.response;
      if (response && response.status === 400) {
        // console.log(response.data.detail)
      } 
    })
  }, [finish]);

  return (
    <div className={styles.MySchedule}>

        {finish === 0 && <div className={styles.containerButton}>
            <span>Meus agendamentos</span>
            <button
              onClick={handleFinish}
              type="button">Mudar para concluidos</button>
          </div>}
        {finish === 1 && <div className={styles.containerButton}>
            <span>Agendamentos concluidos</span>
            <button
              onClick={handleFinish}
              type="button">Mudar para concluidos</button>
          </div>}
      
        {data &&
          data.map((d, key) => (
              <p key={key}>agendado marcado para - {d?.date_of_scheduling}
               &nbsp; &nbsp; &nbsp; &nbsp;
              <b>(cancelamento via whatsapp (00) 9 99999 - 9999) </b></p>
            ))
            
        }

        {data.length < 1 && <p>Não há agendamentos concluidos</p>}
      
    </div>
  )
}

export default MySchedule