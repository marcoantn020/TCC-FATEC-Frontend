import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './Patient.module.css'

const Patient = () => {
  const location = useLocation();
  const patient_id = location.state.pattern

  return (
    <div className={styles.Patient}>

      <div className={styles.container}>
        <form>
        <input type="hidden" name="id_patient"  value={patient_id} />

        <input type="text" name="has_diabetes"  placeholder='tem diabetes' />
        <input type="text" name="observations_diabetes" placeholder='Observações adicionais' />
        <hr />
        <input type="text" name="have_hypertension" placeholder='tem hipertenção' />
        <input type="text" name="observations_hypertension" placeholder='Observações adicionais' />
        <hr />
        <input type="text" name="take_medicines"  placeholder='toma remedios controlados' />
        <input type="text" name="observations_medicines" placeholder='Observações adicionais' />
        <hr />
        <input type="text" name="allergic_to_medicine"  placeholder='alegico a remedio' />
        <input type="text" name="which_medicine" placeholder='qual remedio' />
        <hr />
        <input type="text" name="have_cancer"  placeholder='tem cancer' />
        <input type="text" name="which_type_cancer" placeholder='Qual?' />
        <hr />
        <input type="text" name="has_pacemaker"  placeholder='tem marcapasso' />
        <input type="text" name="has_pin" placeholder='tem pino' />
        <input type="text" name="is_cadiaco"  placeholder='é cardiaco' />
        <hr />
        <input type="text" name="have_foot_surgery" placeholder='tem cirurgia no pé?' />
        <input type="text" name="which_foot" placeholder='qual pé?' />
        <hr />
        <input type="text" name="about_the_foot_of_the_patient_has_callus"  placeholder='Tem Calo?' />
        <input type="text" name="about_the_foot_of_the_patient_has_callosity"  placeholder='Tem Calosidade?' />
        <input type="text" name="about_the_foot_of_the_patient_has_fissure"  placeholder='Tem fissura?' />
        <input type="text" name="about_the_foot_of_the_patient_has_dryness"  placeholder='tem secura?' />
        <input type="text" name="about_the_foot_of_the_patient_has_psoriasis"  placeholder='tem psoríase?' />
        <input type="text" name="about_the_foot_of_the_patient_has_pantar_wart"  placeholder='tem verruga plantar?' />
        <input type="text" name="about_the_nail_of_the_patient_has_onychocryptosis"  placeholder='tem onicocriptose?' />
        <input type="text" name="about_the_nail_of_the_patient_has_onycholysis"  placeholder='tem onicólise?' />
        <input type="text" name="about_the_nail_of_the_patient_has_onychomycosis"  placeholder='tem onicomicose?' />
        <input type="text" name="about_the_nail_of_the_patient_has_onychophoresis"  placeholder='tem onicoforese?' />
        <hr />
        <input type="text" name="sensitive_to_pain" placeholder='Sensivel a dor' />
        <input type="text" name="type_of_sock" placeholder='tipode meia?' />
        <input type="text" name="type_of_shoe" placeholder='tipo de sapato?' />
        <input type="text" name="shoe_number" placeholder='numero do sapato?' />
        </form>
      </div>

    </div>
  )
}

export default Patient