import React from 'react'
import style from './Header.module.css'
import logo from './../../../Common/img/Logo.png'
import avatar from "./../../../Common/img/AvatarDefault.png"
const MyHeader = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logoName}>
          <img className={style.logo} src={logo} alt='logo' />
          <h1 className={style.name}>Jamskills</h1>
        </div>
        <div className={style.userInfo}>
          <span className={style.userName}>Александр Игоревич</span>
          <img src={avatar} alt="avatar" />
        </div>
      </header>

    </>
  )
}


export default MyHeader;