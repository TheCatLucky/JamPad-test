import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import logo from "./../../Common/img/LogoWhite.png";
import style from "./Registration.module.css";
import { NavLink } from 'react-router-dom';


const Registration = () =>{
    return (
      <div className={style.reg}>
        <div className={style.intro}>
          <img src={logo} className={style.logo} alt="logo"/>
          <span className={style.capitalIntro}>Добро Пожаловать!</span>
          <p className={style.firstP}><span className={style.jam}>Jamskills</span> - это сервис для автоматизации оценки сотрудников и кандидатов!</p>
          <p className={style.secondP}>Если Вы уже зарегистрированны, <br /> войдите в свой кабинет</p>
          <NavLink to="/authorization"><button className={style.create}>Войти</button></NavLink>
        </div>
        <div className={style.login}>
          <span className={style.capitalAuth}>Регистрация</span>
          <div className={style.inpitDivRow}>
            <UserOutlined className={style.userImg} style={{ color: "#1890FF"}}/>
            <div className={style.inpitDivCol}>
              <input className={style.input} placeholder="Фамилия"></input>
              <div className={style.inpitDivRow}>
                <input className={style.input + " " + style.name} placeholder="Имя"></input>
                <input className={style.input + " " + style.patronymic} placeholder="Отчество"></input>
              </div>
            </div>
          </div>
          <div className={style.inpitDiv + " " + style.mt24}>
            <MailOutlined className={style.emailImg} style={{ color: "#1890FF" }}/>
            <input className={style.input} placeholder="example@mail.com"></input>
          </div>
          <div className={style.inpitDiv}>
         {/*    <img src={password} className={style.passwordImg} alt="pass" /> */}
            <LockOutlined className={style.passwordImg} style={{ color: "#1890FF" }}/>
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


export default Registration;