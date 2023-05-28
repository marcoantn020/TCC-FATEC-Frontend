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
            defaultValue={data?.first_name ? data.first_name : userDataCurrent?.first_name}
            onChange={(e) => updateFieldHandler("first_name", e.target.value)}
            type="text" 
            name="first_name" 
            id="first_name" 
            placeholder='Nome' />
      </div>

      <div className="formControl">
        <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
        <input 
          defaultValue={data?.last_name ? data.last_name : userDataCurrent?.last_name}
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
            defaultValue={data?.birth_date ? data.birth_date : userDataCurrent?.birth_date}
            type="text"
            onChange={(e) => updateFieldHandler("birth_date", e.target.value)} 
            name="birth_date" id="birth_date" 
            placeholder='03/10/1992' />
        </div>
        
        <div className="formControl">
          <VscMail fontSize={"1.2em"} />
          <input 
            required
            defaultValue={data?.email ? data.email : userDataCurrent?.email}
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
                defaultChecked={data?.genre === "M" ? true : userDataCurrent?.genre === "M" && true }
                onChange={(e) => updateFieldHandler("genre", e.target.value)} 
                name="genre" value="M" /> <span>Masculino</span> </label>
            <label>
              <input  
                type="radio" 
                defaultChecked={data?.genre === "F" ? true : userDataCurrent?.genre === "F" && true }
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
            defaultChecked={data?.practice_activity === "1" ? true : userDataCurrent?.practice_activity === "1" && true }
            onChange={(e) => updateFieldHandler("practice_activity", e.target.value)} 
            name="practice_activity" value={1} /> <span>Sim</span></label>
        <label>
          <input 
            type="radio"
            defaultChecked={data?.practice_activity === "0" ? true : userDataCurrent?.practice_activity === "0" && true }
            onChange={(e) => updateFieldHandler("practice_activity", e.target.value)} 
            name="practice_activity" value={0} /> <span>Não</span></label>
            </div>
          </div>
        </div>
      
          <div className="formControl">
            <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
            <input
              defaultValue={data?.what_activity ? data.what_activity : userDataCurrent?.what_activity}
              onChange={(e) => updateFieldHandler("what_activity", e.target.value)} 
              name="what_activity" 
              id="what_activity"
              placeholder='Qual esporte?'/>
          </div>

    </>
  )
}

export default DataGeneral