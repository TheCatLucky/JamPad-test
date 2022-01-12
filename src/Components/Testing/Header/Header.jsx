import React from 'react'
import style from './Header.module.css'
import logo from './../../../Common/img/Logo.png'

const MyHeader = () => {
  return (
    <>
      <header className={style.header}>
        <img className={style.logo} src={logo} alt='logo' />
        <h4 className={style.name}>Jamskills</h4>
      </header>

    </>
  )
}


export default MyHeader;