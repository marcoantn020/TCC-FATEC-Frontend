import React from 'react'
import styles from '../Consultation.module.css'

const ConsultationTwo = ({updateFieldHandler}) => {
  return (
    <>

    
    <div className={styles.box}>

    <div className="formControl">
          <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            // value={data.name || ""}
            onChange={(e) => updateFieldHandler("left_foot_dermatological_pathology", e.target.value)}  
            type="text" 
            name="left_foot_dermatological_pathology" 
            id="name" 
            placeholder='patologia dermatológica do pé esquerdo' />
      </div>

      <div className="formControl">
          <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            // value={data.name || ""}
            onChange={(e) => updateFieldHandler("right_foot_dermatological_pathology", e.target.value)}  
            type="text" 
            name="right_foot_dermatological_pathology" 
            id="name" 
            placeholder='patologia dermatológica do pé direito' />
      </div>

    </div>

    <div className={styles.box}>

      <div className="formControl">
            <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
            <input 
              required
              // value={data.name || ""}
              onChange={(e) => updateFieldHandler("pathology_present_in_nail_left_foot", e.target.value)}  
              type="text" 
              name="pathology_present_in_nail_left_foot" 
              id="name" 
              placeholder='patologia presente na unha do pé esquerdo' />
        </div>

        <div className="formControl">
            <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
            <input 
              required
              // value={data.name || ""}
              onChange={(e) => updateFieldHandler("pathology_present_in_nail_right_foot", e.target.value)}  
              type="text" 
              name="pathology_present_in_nail_right_foot" 
              id="name" 
              placeholder='patologia presente na unha do pé direito' />
        </div>

      </div>

      <div className={styles.box}>
        <textarea 
          style={{ width: '100%' }}
          rows={5}
          name="performed_procedure"
          onChange={(e) => updateFieldHandler("performed_procedure", e.target.value)} 
          placeholder="procedimento realizado"
          className={styles.textarea}></textarea>
      </div>

    </>
  )
}

export default ConsultationTwo