import React from 'react'
import styles from '../Patient.module.css'

const PathologiesOne = ({updateFieldHandler}) => {
  return (
    <div style={{with: '100%'}}>

      <div className={styles.box}>
        <div className="inputRadio">
          <span>Tem diabetes?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("has_diabetes", e.target.value)} 
                name="has_diabetes" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("has_diabetes", e.target.value)} 
                name="has_diabetes" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <textarea 
        rows={5}
        name="observations_diabetes"
        onChange={(e) => updateFieldHandler("observations_diabetes", e.target.value)} 
        placeholder="adicione mais detalhes caso necessario"
        className={styles.textarea}></textarea>

      </div>

      <div className={styles.box}>
        <div className="inputRadio">
          <span>Tem hipertenção?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("have_hypertension", e.target.value)} 
                name="have_hypertension" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("have_hypertension", e.target.value)} 
                name="have_hypertension" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <textarea 
        rows={5}
        name="observations_hypertension"
        onChange={(e) => updateFieldHandler("observations_hypertension", e.target.value)} 
        placeholder="adicione mais detalhes caso necessario"
        className={styles.textarea}></textarea>

      </div>

      <div className={styles.box}>
        <div className="inputRadio">
          <span>Toma medicamentos controlados?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("take_medicines", e.target.value)} 
                name="take_medicines" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("take_medicines", e.target.value)} 
                name="take_medicines" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <textarea 
        rows={5}
        name="observations_medicines"
        onChange={(e) => updateFieldHandler("observations_medicines", e.target.value)} 
        placeholder="adicione mais detalhes caso necessario"
        className={styles.textarea}></textarea>

      </div>

      </div>
  
  )
}

export default PathologiesOne