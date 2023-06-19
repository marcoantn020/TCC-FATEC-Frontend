import React from 'react'
import styles from '../Consultation.module.css'

const ConsultationOne = ({updateFieldHandler}) => {
  return (
    <div>

      <div className={styles.box}>
      <textarea 
        rows={5}
        name="left_foot_professional_observation"
        onChange={(e) => updateFieldHandler("left_foot_professional_observation", e.target.value)} 
        placeholder="Pé esquerdo observação profissional"
        className={styles.textarea}></textarea>

        <textarea 
        rows={5}
        name="right_foot_professional_observation"
        onChange={(e) => updateFieldHandler("right_foot_professional_observation", e.target.value)} 
        placeholder="pé direito observação profissional"
        className={styles.textarea}></textarea>

      </div>

      <div className={styles.box}>

        <div className="formControl">
              <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
              <input 
                required
                // value={data.name || ""}
                onChange={(e) => updateFieldHandler("type_pressure_left_foot", e.target.value)}  
                type="text" 
                name="type_pressure_left_foot" 
                id="name" 
                placeholder='digito pressão pé esquerdo' />
          </div>

          <div className="formControl">
              <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
              <input 
                required
                // value={data.name || ""}
                onChange={(e) => updateFieldHandler("type_pressure_right_foot", e.target.value)}  
                type="text" 
                name="type_pressure_right_foot" 
                id="name" 
                placeholder='digito pressão pé direito' />
          </div>

      </div>

      <div className={styles.box}>

      <div className="formControl">
            <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
            <input 
              required
              // value={data.name || ""}
              onChange={(e) => updateFieldHandler("left_foot_mono_filament_test", e.target.value)}  
              type="text" 
              name="left_foot_mono_filament_test" 
              id="name" 
              placeholder='teste de monofilamento do pé esquerdo' />
        </div>

        <div className="formControl">
            <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
            <input 
              required
              // value={data.name || ""}
              onChange={(e) => updateFieldHandler("right_foot_mono_filament_test", e.target.value)}  
              type="text" 
              name="right_foot_mono_filament_test" 
              id="name" 
              placeholder='teste de monofilamento do pé direito' />
        </div>

      </div>

      </div>
  
  )
}

export default ConsultationOne