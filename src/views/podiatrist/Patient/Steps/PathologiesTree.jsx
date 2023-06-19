import React from 'react'
import styles from '../Patient.module.css'

const PathologiesTree = ({updateFieldHandler}) => {
  return (
    <>
      <div className={styles.box}>
        <div className="inputRadio">
          <span>Tem Calo?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_callus", e.target.value)} 
                name="about_the_foot_of_the_patient_has_callus" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_callus", e.target.value)} 
                name="about_the_foot_of_the_patient_has_callus" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <div className="inputRadio">
          <span>Tem Calosidade?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_callosity", e.target.value)} 
                name="about_the_foot_of_the_patient_has_callosity" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_callosity", e.target.value)} 
                name="about_the_foot_of_the_patient_has_callosity" value={0} /> <span>Não</span></label>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className="inputRadio">
          <span>Tem fissura?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_fissure", e.target.value)} 
                name="about_the_foot_of_the_patient_has_fissure" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_fissure", e.target.value)} 
                name="about_the_foot_of_the_patient_has_fissure" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <div className="inputRadio">
          <span>tem secura?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_dryness", e.target.value)} 
                name="about_the_foot_of_the_patient_has_dryness" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_dryness", e.target.value)} 
                name="about_the_foot_of_the_patient_has_dryness" value={0} /> <span>Não</span></label>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className="inputRadio">
          <span>tem psoríase?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_psoriasis", e.target.value)} 
                name="about_the_foot_of_the_patient_has_psoriasis" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_psoriasis", e.target.value)} 
                name="about_the_foot_of_the_patient_has_psoriasis" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <div className="inputRadio">
          <span>tem verruga plantar?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_pantar_wart", e.target.value)} 
                name="about_the_foot_of_the_patient_has_pantar_wart" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_foot_of_the_patient_has_pantar_wart", e.target.value)} 
                name="about_the_foot_of_the_patient_has_pantar_wart" value={0} /> <span>Não</span></label>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className="inputRadio">
          <span>tem onicocriptose?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_nail_of_the_patient_has_onychocryptosis", e.target.value)} 
                name="about_the_nail_of_the_patient_has_onychocryptosis" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_nail_of_the_patient_has_onychocryptosis", e.target.value)} 
                name="about_the_nail_of_the_patient_has_onychocryptosis" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <div className="inputRadio">
          <span>tem onicólise?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_nail_of_the_patient_has_onycholysis", e.target.value)} 
                name="about_the_nail_of_the_patient_has_onycholysis" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_nail_of_the_patient_has_onycholysis", e.target.value)} 
                name="about_the_nail_of_the_patient_has_onycholysis" value={0} /> <span>Não</span></label>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className="inputRadio">
          <span>tem onicomicose?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_nail_of_the_patient_has_onychomycosis", e.target.value)} 
                name="about_the_nail_of_the_patient_has_onychomycosis" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_nail_of_the_patient_has_onychomycosis", e.target.value)} 
                name="about_the_nail_of_the_patient_has_onychomycosis" value={0} /> <span>Não</span></label>
          </div>
        </div>

        <div className="inputRadio">
          <span>tem onicoforese?</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_nail_of_the_patient_has_onychophoresis", e.target.value)} 
                name="about_the_nail_of_the_patient_has_onychophoresis" value={1} /> <span>Sim</span></label>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("about_the_nail_of_the_patient_has_onychophoresis", e.target.value)} 
                name="about_the_nail_of_the_patient_has_onychophoresis" value={0} /> <span>Não</span></label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PathologiesTree