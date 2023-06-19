
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4Filled } from 'react-icons/tb'
import styles from './Steps.module.css'

const StepByStep = ({currentStep}) => {
  return (
    <div className={styles.steps}>
      <div className={`${styles.step} ${styles.active}`}>
        <TbSquareRoundedNumber1Filled />
      </div>

      <div className={`${styles.step}  ${currentStep >= 2 ? styles.active : ''}`}>
        <TbSquareRoundedNumber2Filled />
      </div>

      <div className={`${styles.step}  ${currentStep >= 3 ? styles.active : ''}`}>
        <TbSquareRoundedNumber3Filled />
      </div>

      <div className={`${styles.step}  ${currentStep >= 4 ? styles.active : ''}`}>
        <TbSquareRoundedNumber4Filled />
      </div>
    </div>
  )
}

export default StepByStep