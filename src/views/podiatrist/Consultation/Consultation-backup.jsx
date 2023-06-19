import React from 'react'

const Consultation = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <form>
        <input type="text" name="id_patient" placeholder='kkkkkk' />

        <input name="performed_procedure" placeholder='procedimento realizado' />
        <input name="date_of_scheduling" placeholder='data de agendamento' />
      </form>

    </div>
  )
}

export default Consultation