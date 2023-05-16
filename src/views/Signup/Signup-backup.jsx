import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Signup.module.css'

const Signup = () => {

  const [value, setValues] = useState()

  const handleChange = (ev) => {
        setValues({
          ...value,
          [ev.target.name]: ev.target.value
        })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(typeof value.practice_activity);
    console.log(value);
  }

  return (
   <div className={styles.containerSignup}>
     <div className={styles.Signup}>
      <br />
      <h2>Novo Usuario</h2>
      <form onSubmit={handleSubmit}>
      <div className="boxForm">
        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input onChange={handleChange} type="text" name="first_name" id="first_name" placeholder='Nome' />
        </div>

        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input onChange={handleChange} type="text" name="last_name" id="last_name" placeholder='Sobrenome'/>
        </div>

        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input type="text" onChange={handleChange} name="username" id="username" placeholder='username'/>
        </div>
      </div> {/* boxForm */}
      
      <div className="boxForm">
        
      </div> {/* boxForm */}
      
      <div className="boxForm">
        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input type="text" onChange={handleChange} name="birth_date" id="birth_date" placeholder='data de aniversario ex: 03/10/1992' />
        </div>
        
        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input type="text" onChange={handleChange} name="email" id="email" placeholder='seu email ex: exemple@gmail.com'/>
        </div>
      </div> {/* boxForm */}

      <div className="boxForm">
          <span>Genero</span>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '.75em'}}>
            <label style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '.75em'}}>
              <input type="radio" onChange={handleChange} name="genre" value="M" /> <span>Masc</span> </label>
            <label style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '.75em'}}>
              <input type="radio" onChange={handleChange} name="genre" value="F" /> <span>Fem</span> </label>
          </div>
      </div>
     

      <div className="boxForm">
        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input type="text" onChange={handleChange} name="zipcode" id="zipcode" placeholder='seu cep ex: 17560-089'/>
        </div>

        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input type="text" onChange={handleChange} name="city" id="city" placeholder='sua cidadeex: Marilia'/>
        </div>
      </div> {/* boxForm */}

      <div className="boxForm">
        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
        <input type="text" onChange={handleChange} name="district" id="district" placeholder='seu bairro ex: centro'/>
        </div>
        
        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input type="text" onChange={handleChange} name="street" id="street" placeholder='sua rua ex: rua dos bobos'/>
        </div>
        
        <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input type="text" onChange={handleChange} name="number" id="number" placeholder='numero da casa. ex: 0'/>
        </div>
      </div> {/* boxForm */}
      
      
      <div>
        <span>Pratica esportes</span>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '.75em'}}>
        <label style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '.75em'}}>
          <input type="radio" onChange={handleChange} name="practice_activity" value={true} /> <span>Sim</span></label>
        <label style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '.75em'}}>
          <input type="radio" onChange={handleChange} name="practice_activity" value={false} /> <span>Não</span></label>
        </div>
      </div>
      
      <div className="formControl">
        <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
        <input type="text" onChange={handleChange} name="what_activity" id="what_activity"
         placeholder='Qual esporte?'/>
      </div>

        <button>Cadastrar</button>
      <p>
        <Link to="/login">Login</Link>
      </p>
      </form>
      <br />
    </div>
   </div>
  )
}

export default Signup