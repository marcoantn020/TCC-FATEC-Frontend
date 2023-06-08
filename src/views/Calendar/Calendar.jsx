import React from 'react'
import { addLocale } from 'primereact/api';
import { Calendar as PrimeCalendar } from 'primereact/calendar';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from "./Calendar.module.css"
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';

const Calendar = () => {

  const [date, setDate] = useState()
  addLocale('ptBR', {
    firstDayOfWeek: 0,
    dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
    dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: ['Janeiro', 'Fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    monthNamesShort: ['jan', 'feb', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'sep', 'out', 'nov', 'dez'],
    today: 'Hoje',
    clear: 'limpar'
});
  const {setNotificationError, setNotification} = useStateContext()
  const [dateSelected, setDateSelected] = useState()
  const [hourSelected, setHourSelected] = useState()

  const [errorApi, setErrorApi] = useState()
  const [success, setSuccess] = useState()

  const message = (message) => {
    setSuccess(`Agendado para ${message}`)
    setTimeout(() => {
      setSuccess('')
    }, 3000)
  }

  const messageError = (message) => {
    setErrorApi(message)
    setTimeout(() => {
      setErrorApi('')
    }, 3000)
  }

  const handleSubmit = () => {
    if(date?.getDate() === undefined || date?.getHours() === undefined) {
      setNotificationError("Selecione uma data e um horario")
      return
    }
    const day = date?.getDate() < 10 ? "0" + date?.getDate() : date?.getDate()
    const month = date?.getMonth() < 10 ? "0" + (date?.getMonth() + 1) : (date?.getMonth() + 1)
    const dateSelect = day + "/" + month + "/" + date?.getFullYear()

    const hour = date?.getHours() < 9 ? "0" + date?.getHours() : date?.getHours()
    const hourSelect = hour + ":00:00"

    const payload = {
      date_of_scheduling: dateSelect,
      hour_of_scheduling: hourSelect
    }

    axiosClient.post('/patient/schedule', payload)
    .then(( { data } ) => {
      message(data.schedule);
      setNotification("Agendando com sucesso.")
      if(data.status === 401) {
        window.location.reload()
      }
    })
    .catch((err) => {
      const response = err.response;
      console.log(response);
      if (response && response.status === 400) {
        messageError(response.data.detail)
      } 
    })

  }

  useEffect(() => {
    if(date) {
      const hour = date?.getHours() < 10 ? "0" + date?.getHours() : date?.getHours()

      const day = date?.getDate() < 10 ? "0" + date?.getDate() : date?.getDate()
      const month = date?.getMonth() < 10 ? "0" + (date?.getMonth() + 1) : (date?.getMonth() + 1)
      const dateFormat = date?.getFullYear() + "-" + month + "-" + day
      setDateSelected(dateFormat)
      setHourSelected(`${hour}:00:00`)
    }
  }, [date])

  return (
    <>
      <div className={styles.Calendar}>
        <div className={styles.section}>
          <PrimeCalendar
            showTime 
            hourFormat="24"
            inline
            dateFormat="dd/mm/yy"
            locale="ptBR"
            value={date} 
            onChange={(e) => setDate(e.value)} />
        </div>

        <div className={styles.aside}>
            <form>
              <div>
                <input type="date" name='day' value={dateSelected ?? ""} disabled/>
                <input type="time" name='hour' value={hourSelected ?? ""} disabled/>
              </div>
              <br />
              <button onClick={handleSubmit} type='button'>Agendar</button>
            </form>
            {errorApi && <div className='error'>
              <p>{errorApi}</p>
            </div>}

            {success && <p className='success'>{success}</p>}

            <div className={styles.info}>
                <p>
                  ! Atenção os agendamentos são feitos, somente para o dia posterior, em horas cheias ou seja 10:00, 14:00, 16:00, apos o agendamento caso precise desmarcar seu horario nos avise pelo whatsapp (00) 9 9999 9999.
                </p>
            </div>
        </div>

      </div>
    </>
  )
}

export default Calendar