import React from 'react'
import style from './Header.module.css'
import logo from './../../../Common/img/Logo.png'
  
class Header extends React.Component{
  render() {
    return (
      <>
        <header className={style.header}>
          <img className={style.logo} src={logo} alt='logo'/>
          <h4 className={style.name}>JamSkills</h4>
        </header>
        
      </>
    )
  }
}

export default Header;