import React from 'react'
import styles from '../Patient.module.css'

const PathologiesFour = ({updateFieldHandler}) => {
  return (
    <>
      <div className={styles.box}>
        <div className="formControl">
          <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            // value={data.name || ""}
            onChange={(e) => updateFieldHandler("sensitive_to_pain", e.target.value)}  
            type="text" 
            name="sensitive_to_pain" 
            id="name" 
            placeholder='Sensivel a dor?' />
        </div>

        <div className="formControl">
          <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            // value={data.name || ""}
            onChange={(e) => updateFieldHandler("type_of_sock", e.target.value)}  
            type="text" 
            name="type_of_sock" 
            id="name" 
            placeholder='tipo de meia?' />
        </div>
      </div>

      <div className={styles.box}>
        <div className="formControl">
          <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            // value={data.name || ""}
            onChange={(e) => updateFieldHandler("type_of_shoe", e.target.value)}  
            type="text" 
            name="type_of_shoe" 
            id="name" 
            placeholder='tipo de sapato?' />
        </div>

        <div className="formControl">
          <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            // value={data.name || ""}
            onChange={(e) => updateFieldHandler("shoe_number", e.target.value)}  
            type="text" 
            name="shoe_number" 
            id="name" 
            placeholder='numero do sapato?' />
        </div>
      </div>
    </>
  )
}

export default PathologiesFour