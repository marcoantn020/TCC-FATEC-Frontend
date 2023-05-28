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
            defaultValue={data?.zipcode ? data.zipcode : userDataCurrent?.zipcode}
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
          defaultValue={data?.city ? data.city : userDataCurrent?.city}
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
        defaultValue={data?.district ? data.district : userDataCurrent?.district}
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
          defaultValue={data?.street ? data.street : userDataCurrent?.street}
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
          defaultValue={data?.number ? data.number : userDataCurrent?.number}
          onChange={(e) => updateFieldHandler("number", e.target.value)} 
          name="number"
          id="number"
          placeholder='numero da casa. ex: 0'/>
      </div>
    </>
  )
}

export default Address