import { LockOutlined, MailOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { logIn } from '../../Redux/reducers//auth/authReducer'
import { Input } from './../../Common/Forms/FormControls'
import logo from "./../../Common/img/LogoWhite.png"
import style from "./Authorization.module.css"

const Authorization = (props) => {

  const dispatch = useDispatch()
  const onSubmit = (formData) => {
    dispatch(logIn(formData.email, formData.password));
  }

  return (
    <div className={style.auth}>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

const AuthForm = (props) => {
  return (
    <>
      <div className={style.intro}>
        <img src={logo} className={style.logo} alt="logo" />
        <span className={style.capitalIntro}>Добро Пожаловать!</span>
        <p className={style.firstP}><span className={style.jam}>Jamskills</span> - это сервис для автоматизации оценки сотрудников и кандидатов!</p>
        <p className={style.secondP}>Если Вы еще не зарегистрированны, <br /> создайте свой кабинет</p>
        <NavLink to="/registration"><button className={style.create}>Создать</button></NavLink>
      </div>
      <form className={style.login} onSubmit={props.handleSubmit}>
        <span className={style.capitalAuth}>Авторизация</span>
        <div className={style.inputDiv}>
          <MailOutlined className={style.emailImg} style={{ color: "#1890FF" }} />
          <Field name={"email"} component={Input}
            className={style.input}
            placeholder={"example@mail.com"}
          />
        </div>
        <div className={style.inputDiv}>
          <LockOutlined className={style.passwordImg} style={{ color: "#1890FF" }} />
          <Field name={"password"} component={Input}
            className={style.input} type={"password"}
            placeholder={"••••••••"} 
          />
          
        </div>
        <button className={style.enter}>Войти</button>
      </form>
    </>

  )
}

const ReduxLoginForm = reduxForm({ form: 'authen' })(AuthForm)

export default Authorization;