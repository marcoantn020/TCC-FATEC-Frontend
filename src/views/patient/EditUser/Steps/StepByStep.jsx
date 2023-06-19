
import { FiUser } from 'react-icons/fi'
import { VscLocation } from "react-icons/vsc";
import styles from './Steps.module.css'

const StepByStep = ({currentStep}) => {
  return (
    <div className={styles.steps}>
      <div className={`${styles.step} ${styles.active}`}>
        <FiUser fontSize={"1.5em"} />
        <p>Dados Gerais</p>
      </div>

      <div className={`${styles.step}  ${currentStep >= 1 ? styles.active : ''}`}>
        <VscLocation fontSize={"1.5em"} />
        <p>Endereço</p>
      </div>
    </div>
  )
}

export default StepByStep