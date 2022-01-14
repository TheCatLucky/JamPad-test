import HollandTest from "../Components/TestsCases/HollandTest/HollandTest";
import Authorization from "./../Components/Authorization/Authorization";
import Registration from './../Components/Registration/Registaration';
import Testing from './../Components/Testing/Testing';
import UscTest from './../Components/TestsCases/uscTest/UscTest';

export const routeNames = {
  AUTH: '/authorization',
  REGISTRATION: '/registration',
  TEST: '/testing',
  HOLLANDTEST: '/hollandTest',
  USCTEST: '/uscTest'
}
export const publicRoutes = [
  { path: routeNames.AUTH, component: <Authorization/> },
  { path: routeNames.REGISTRATION,  component: <Registration/>},

]

export const privateRoutes = [
  { path: routeNames.TEST, component: <Testing/> },
  { path: routeNames.HOLLANDTEST, component: <HollandTest /> },
  { path: routeNames.USCTEST, component: <UscTest /> }
]