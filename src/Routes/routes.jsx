import Authorization from "./../Components/Authorization/Authorization"
import Testing from './../Components/Testing/Testing';
import Registration from './../Components/Registration/Registaration';


export const routeNames = {
  AUTH: '/authorization',
  REGISTRATION: '/registration',
  TEST: '/testing'
}
export const publicRoutes = [
  { path: routeNames.AUTH, component: <Authorization/> },
  { path: routeNames.REGISTRATION,  component: <Registration/>}
]

export const privateRoutes = [
  { path: routeNames.TEST, component: <Testing/> }
]