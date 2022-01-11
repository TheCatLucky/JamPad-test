import React from 'react'
import style from "./Registration.module.css"
import logo from "./../../Common/img/LogoWhite.png"
import email from "./../../Common/img/Email.svg"
import password from "./../../Common/img/Password.svg"
import user from "./../../Common/img/User.svg"

class Registration extends React.Component {
  render() {
    return (
      <div className={style.reg}>
        <div className={style.intro}>
          <img src={logo} className={style.logo} alt="logo" />
          <span className={style.capitalIntro}>Добро Пожаловать!</span>
          <p className={style.firstP}><span className={style.jam}>Jamskills</span> - это сервис для автоматизации оценки сотрудников и кандидатов!</p>
          <p className={style.secondP}>Если Вы уже зарегистрированны, <br /> войдите в свой кабинет</p>
          <button className={style.create}>Войти</button>
        </div>
        <div className={style.login}>
          <span className={style.capitalAuth}>Регистрация</span>
          <div className={style.inpitDivRow}>
            <img src={user} className={style.userImg} alt="user" />
            <div className={style.inpitDivCol}>
              <input className={style.input} placeholder="Фамилия"></input>
              <div className={style.inpitDivRow}>
                <input className={style.input + " " + style.name} placeholder="Имя"></input>
                <input className={style.input + " " + style.patronymic} placeholder="Отчество"></input>
              </div>
            </div>
          </div>
          <div className={style.inpitDiv + " " + style.mt24}>
            <img src={email} className={style.emailImg} alt="email" />
            <input className={style.input} placeholder="example@mail.com"></input>
          </div>
          <div className={style.inpitDiv}>
            <img src={password} className={style.passwordImg} alt="pass" />
            <div className={style.inpitDivCol + " " + style.mt8}>
              <input className={style.input} placeholder="••••••••"></input>
              <input className={style.input} placeholder="••••••••"></input>
            </div>
          </div>
          <div className={style.accept}>
            <input type="checkbox" className={style.checkbox}/>
            <p className={style.lastP + " " + style.pl8}>Принимаю <a className={style.lastP} href="#">Пользовательское соглашение и Политику конфиденциальности</a></p>
          </div>
          <button className={style.enter}>Создать</button>
        </div>
      </div>
    )
  }
}

export default Registration;