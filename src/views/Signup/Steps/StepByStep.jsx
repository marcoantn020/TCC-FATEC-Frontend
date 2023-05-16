
import { FiUser } from 'react-icons/fi'
import { VscLocation, VscKey } from "react-icons/vsc";
import styles from './Steps.module.css'

const StepByStep = ({currentStep}) => {
  return (
    <div className={styles.steps}>
      <div className={`${styles.step} ${styles.active}`}>
        <VscKey fontSize={"1.5em"} />
        <p>Autenticação</p>
      </div>

      <div className={`${styles.step}  ${currentStep >= 1 ? styles.active : ''}`}>
        <FiUser fontSize={"1.5em"} />
        <p>Dados Gerais</p>
      </div>

      <div className={`${styles.step}  ${currentStep >= 2 ? styles.active : ''}`}>
        <VscLocation fontSize={"1.5em"} />
        <p>Endereço</p>
      </div>
    </div>
  )
}

export default StepByStep