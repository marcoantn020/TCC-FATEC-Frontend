import React from 'react'
import { VscCalendar, VscMail } from "react-icons/vsc";

const DataGeneral = ({data, updateFieldHandler, userDataCurrent}) => {
  return (
    <>
      <br />

      <div className="formControl">
          <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
          <input 
            required
            value={userDataCurrent?.name ? userDataCurrent?.name : data.name}
            onChange={(e) => updateFieldHandler("name", e.target.value)}
            type="text" 
            name="name" 
            id="name" 
            placeholder='Nome' />
      </div>

      <div className="formControl">
        <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
        <input 
          value={userDataCurrent?.last_name ? userDataCurrent?.last_name : data.last_name}
          onChange={(e) => updateFieldHandler("last_name", e.target.value)} 
          type="text" 
          name="last_name" 
          id="last_name" 
          placeholder='Sobrenome'/>
      </div>

      <div className="formControl">
          <VscCalendar fontSize={"1.2em"} />
          <input 
            required
            value={data.birth_date || ""}
            type="date"
            onChange={(e) => updateFieldHandler("birth_date", e.target.value)} 
            name="birth_date" id="birth_date" 
            placeholder='03/10/1992' />
        </div>
        
        <div className="formControl">
          <VscMail fontSize={"1.2em"} />
          <input 
            required
            value={userDataCurrent?.email ? userDataCurrent?.email : data.email}
            onChange={(e) => updateFieldHandler("email", e.target.value)} 
            name="email" id="email" 
            placeholder='seu email ex: exemple@gmail.com'/>
        </div>

        <div className="boxRadio">

        <div className="inputRadio">
          <span>Genero</span>
          <div>
            <label>
              <input 
                type="radio"
                onChange={(e) => updateFieldHandler("genre", e.target.value)} 
                name="genre" value="M" /> <span>Masculino</span> </label>
            <label>
              <input  
                type="radio" 
                onChange={(e) => updateFieldHandler("genre", e.target.value)} 
                name="genre" value="F" /> <span>Feminino</span> </label>
          </div>
      </div>

      <div className="inputRadio">
        <span>Pratica esportes</span>
        <div>
        <label>
          <input 
            type="radio"
            onChange={(e) => updateFieldHandler("practice_activity", e.target.value)} 
            name="practice_activity" value={1} /> <span>Sim</span></label>
        <label>
          <input 
            type="radio"
            onChange={(e) => updateFieldHandler("practice_activity", e.target.value)} 
            name="practice_activity" value={0} /> <span>Não</span></label>
            </div>
          </div>
        </div>
      
          <div className="formControl">
            <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
            <input
              value={userDataCurrent?.what_activity ? userDataCurrent?.what_activity : data.what_activity} 
              onChange={(e) => updateFieldHandler("what_activity", e.target.value)} 
              name="what_activity" 
              id="what_activity"
              placeholder='Qual esporte?'/>
          </div>

    </>
  )
}

export default DataGeneral