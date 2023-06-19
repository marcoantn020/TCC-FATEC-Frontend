import React from 'react'
import { VscLock } from "react-icons/vsc";

const UserForm = ({data, updateFieldHandler}) => {
  return (
    <>
      <br />
      <div className="formControl">
        <span className="pi pi-user" style={{ fontSize: '1.2em'}}></span>
        <input 
          required
          type="text"
          value={data.username || ""}
          onChange={(e) => updateFieldHandler("username", e.target.value)} 
          name="username"
          id="username"
          placeholder='username'/>
      </div>

      <div className="formControl">
          <VscLock fontSize={"1.2em"} />
          <input 
            required
            type="password"
            value={data.password || ""}
            onChange={(e) => updateFieldHandler("password", e.target.value)}
            name="password"
            id="password"
            placeholder='sua senha'/>
        </div>
        
        <div className="formControl">
          <VscLock fontSize={"1.2em"} />
          <input 
            required
            type="text"
            value={data.password_confirmation || ""}
            onChange={(e) => updateFieldHandler("password_confirmation", e.target.value)}
            name="password_confirmation"
            placeholder='confirmar senha' />
        </div>

    </>
  )
}

export default UserForm