import React from 'react'
import styles from '../Patient.module.css'

const PathologiesTwo = ({updateFieldHandler}) => {
  return (
    <>

    <div className={styles.box}>
        <div className="inputRadio">
          <span>Alergico a medicamento?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("allergic_to_medicine", e.target.value)} 
                name="allergic_to_medicine" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("allergic_to_medicine", e.target.value)} 
                name="allergic_to_medicine" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <div className="formControl">
          <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            // value={data.name || ""}
            onChange={(e) => updateFieldHandler("which_medicine", e.target.value)}  
            type="text" 
            name="which_medicine" 
            id="name" 
            placeholder='Qual medicamento?' />
      </div>
    </div>

    <div className={styles.box}>
        <div className="inputRadio">
          <span>Tem cancer?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("have_cancer", e.target.value)} 
                name="have_cancer" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("have_cancer", e.target.value)} 
                name="have_cancer" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <div className="formControl">
          <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            // value={data.name || ""}
            onChange={(e) => updateFieldHandler("which_type_cancer", e.target.value)}  
            type="text" 
            name="which_type_cancer" 
            id="name" 
            placeholder='Qual?' />
      </div>
    </div>

    <div className={styles.box}>
        <div className="inputRadio">
          <span>Tem marcapasso?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("has_pacemaker", e.target.value)} 
                name="has_pacemaker" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("has_pacemaker", e.target.value)} 
                name="has_pacemaker" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <div className="inputRadio">
          <span>Tem pino?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("has_pin", e.target.value)} 
                name="has_pin" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("has_pin", e.target.value)} 
                name="has_pin" value={0} /> <span>Não</span></label>
          </div>
        </div>
    </div>

    <div className={styles.box}>
        <div className="inputRadio">
          <span>É cardiaco?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("is_cadiaco", e.target.value)} 
                name="is_cadiaco" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("is_cadiaco", e.target.value)} 
                name="is_cadiaco" value={0} /> <span>Não</span></label>
          </div>
      </div>

        <div className="inputRadio">
          <span>Tem cirurgia no pé?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("have_foot_surgery", e.target.value)} 
                name="have_foot_surgery" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("have_foot_surgery", e.target.value)} 
                name="have_foot_surgery" value={0} /> <span>Não</span></label>
          </div>
        </div>
    </div>

    <div className={styles.box}>
          <div className="formControl">
            <span className="pi pi-question" style={{ fontSize: '1.2em'}}></span>
            <input 
              required
              // value={data.name || ""}
              onChange={(e) => updateFieldHandler("which_foot", e.target.value)}  
              type="text" 
              name="which_foot" 
              id="name" 
              placeholder='Qual pé?' />
        </div>
    </div>

    </>
  )
}

export default PathologiesTwo