import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import logo from "./../../Common/img/LogoWhite.png";
import style from "./Registration.module.css";
import { registration } from '../../Redux/reducers/auth/authReducer'
import { NavLink } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import { Input } from './../../Common/Forms/FormControls'


const Registration = (props) => {
  const dispatch = useDispatch()
  const onSubmit = (formData) => {
    dispatch(registration(formData.email, formData.password, formData.firstName, formData.lastName, formData.patronymic));
  }

  return (
    <div className={style.reg}>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

const RegForm = (props) => {
  return (
    <>
      <div className={style.intro}>
        <img src={logo} className={style.logo} alt="logo" />
        <span className={style.capitalIntro}>Добро Пожаловать!</span>
        <p className={style.firstP}><span className={style.jam}>Jamskills</span> - это сервис для автоматизации оценки сотрудников и кандидатов!</p>
        <p className={style.secondP}>Если Вы уже зарегистрированны, <br /> войдите в свой кабинет</p>
        <NavLink to="/authorization"><button className={style.create}>Войти</button></NavLink>
      </div>
      <form className={style.login} onSubmit={props.handleSubmit}>
        <span className={style.capitalAuth}>Регистрация</span>
        <div className={style.inpitDivRow}>
          <UserOutlined className={style.userImg} style={{ color: "#1890FF" }} />
          <div className={style.inpitDivCol}>
            <Field name={"lastName"} component={Input}
              className={style.input}
              placeholder={"Фамилия"}
            />

            <div className={style.inpitDivRow}>
              <Field name={"firstName"} component={Input}
                className={style.input + " " + style.name}
                placeholder={"Имя"}
              />
              <Field name={"patronymic"} component={Input}
                className={style.input + " " + style.patronymic}
                placeholder={"Отчество"}
              />
            </div>
          </div>
        </div>
        <div className={style.inpitDiv + " " + style.mt24}>
          <MailOutlined className={style.emailImg} style={{ color: "#1890FF" }} />
          <Field name={"email"} component={Input}
            className={style.input}
            placeholder={"example@mail.com"}
          />
        </div>
        <div className={style.inpitDiv}>
          <LockOutlined className={style.passwordImg} style={{ color: "#1890FF" }} />
          <div className={style.inpitDivCol + " " + style.mt8}>
            <Field name={"password"} component={Input}
              className={style.input} type={"password"}
              placeholder={"••••••••"}
            />
            <Field name={"passwrd"} component={Input}
              className={style.input} type={"password"}
              placeholder={"••••••••"}
            />
          </div>
        </div>
        <div className={style.accept}>
          <input type="checkbox" className={style.checkbox} />
          <p className={style.lastP + " " + style.pl8}>Принимаю <a className={style.lastP} href="#">Пользовательское соглашение и Политику конфиденциальности</a></p>
        </div>
        <button className={style.enter}>Создать</button>
      </form>
    </>
  )
}
const ReduxLoginForm = reduxForm({ form: 'reg' })(RegForm)

export default Registration;