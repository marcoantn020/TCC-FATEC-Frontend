import React from 'react'
import { VscLocation } from "react-icons/vsc";

const Address = ({data, updateFieldHandler, userDataCurrent}) => {

  return (
    <>
     <div className="formControl">
          <VscLocation fontSize={"1.2em"} />
          <input 
            required
            type="text"
            value={userDataCurrent.zipcode ? userDataCurrent.zipcode : data.zipcode}
            onChange={(e) => updateFieldHandler("zipcode", e.target.value)} 
            name="zipcode"
            id="zipcode"
            placeholder='seu cep ex: 17560-089'/>
      </div>

      <div className="formControl">
        <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
        <input
          required
          type="text"
          value={userDataCurrent.city ? userDataCurrent.city : data.city}
          onChange={(e) => updateFieldHandler("city", e.target.value)} 
          name="city"
          id="city"
          placeholder='sua cidade ex: Marilia'/>
      </div>

      <div className="formControl">
        <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
      <input
        required
        type="text"
        value={userDataCurrent.district ? userDataCurrent.district : data.district}
        onChange={(e) => updateFieldHandler("district", e.target.value)} 
        name="district"
        id="district"
        placeholder='seu bairro ex: centro'/>
      </div>
      
      <div className="formControl">
        <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
        <input 
          required
          type="text"
          value={userDataCurrent.street ? userDataCurrent.street : data.street}
          onChange={(e) => updateFieldHandler("street", e.target.value)} 
          name="street"
          id="street"
          placeholder='sua rua ex: rua dos bobos'/>
      </div>
      
      <div className="formControl">
        <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
        <input
          required 
          type="text"
          value={userDataCurrent.number ? userDataCurrent.number : data.number}
          onChange={(e) => updateFieldHandler("number", e.target.value)} 
          name="number"
          id="number"
          placeholder='numero da casa. ex: 0'/>
      </div>
    </>
  )
}

export default Address