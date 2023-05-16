import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Dashboard.module.css'
import axiosClient from '../../axios-client'
import { useState } from 'react'

const Dashboard = () => {
  const [userData, setUserData] =  useState()

  useEffect(() => {
    axiosClient.get('/patient/logged')
    .then((data) => {
      setUserData(data.data)
    })
    .catch(e => console.log(e))
  }, [])
  console.log(userData);

  const getAge = (dateBith) => {
    if(!dateBith) return
    const ageYear = dateBith.split("/")
    const currentYear = new Date().getFullYear();
    return (currentYear - Number(ageYear[2])) - 1;
  }

  return (
    <>
    <div className={styles.Dashboard}>
      <div className={styles.header}>
        <h2>Meu perfil</h2>
        <div className={styles.menu}>
          <Link to="#">Editar</Link>
          <Link to="#">Atualizar senha</Link>
        </div> {/* menu */}
      </div> {/* header */}

      <div className={styles.container}>
        <div className={styles.box}>
          <span> <b>Nome:</b> {userData?.name} {userData?.last_name}</span>
        </div> {/* box */}

        <div className={styles.box}>
          <span> <b>Aniversario:</b> {userData?.birth_date}</span>
          <span> <b>Idade:</b> {getAge(userData?.birth_date)}</span>
        </div> {/* box */}

        <div className={styles.box}>
          <span> <b>E-mail:</b> {userData?.email}</span>
        </div> {/* box */}
      
        <div className={styles.box}>
          <span> <b>Genero:</b> {userData?.genre === "M" ? "Masculino" : "Feminino"} </span>
        </div> {/* box */}

        <div className={styles.box}>
          <span> <b>Cidade:</b> city</span>
          <span> <b>Rua:</b> {userData?.street} {userData?.number}</span>
        </div> {/* box */}

        <div className={styles.box}>
          <span> <b>Bairro:</b> {userData?.district}</span>
          <span> <b>CEP:</b> {userData?.zipcode}</span>
        </div> {/* box */}

        <div className={styles.box}>
          <span> <b>Pratica atividade fisica:</b> {userData?.practice_activity ? "Sim" : "Não"}</span>
          <span> <b>Qual:</b> {userData?.what_activity}</span>
        </div> {/* box */}

        <div className={styles.box}>
          <span> <b>Paciente desde:</b> {userData?.created_at}</span>
          <span> <b>Ultima atualização de perfil:</b> {userData?.updated_at}</span>
        </div> {/* box */}
      
      </div> {/* container */}

    </div> {/* Dashboard */}
    </>
  )
}

export default Dashboard