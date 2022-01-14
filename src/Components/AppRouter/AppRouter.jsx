import ColumnGroup from 'antd/lib/table/ColumnGroup';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes, routeNames } from './../../Routes/routes';


const AppRouter = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    isLoggedIn ? <Routes>
      {privateRoutes.map(route =>
      
        <Route path={route.path}
          element={route.component}
          key={route.path}
        />
      )}
      <Route
        path="*"
        element={<Navigate to={routeNames.TEST}/>}/>
    </Routes>
      : <Routes>
        {publicRoutes.map(route =>
          <Route path={route.path}
            element={route.component}
            key={route.path}
          />
        )}
        <Route
          path="*"
          element={<Navigate to={routeNames.HOLLANDTEST} />} />
      </Routes>

  )
}

export default AppRouter;