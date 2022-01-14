import Authorization from "./../Components/Authorization/Authorization"
import Testing from './../Components/Testing/Testing';
import Registration from './../Components/Registration/Registaration';
import HollandTest from "../Components/TestsCases/HollandTest/HollandTest";

export const routeNames = {
  AUTH: '/authorization',
  REGISTRATION: '/registration',
  TEST: '/testing',
  HOLLANDTEST: '/hollandTest'
}
export const publicRoutes = [
  { path: routeNames.AUTH, component: <Authorization/> },
  { path: routeNames.REGISTRATION,  component: <Registration/>}
]

export const privateRoutes = [
  { path: routeNames.TEST, component: <Testing/> },
  { path: routeNames.HOLLANDTEST, component: <HollandTest/> }
]