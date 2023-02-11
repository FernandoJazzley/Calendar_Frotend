import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {

  const authStatus = 'authenticted'; //not-authenticted

  return (
    <Routes>
      {
        ( authStatus === 'not-authenticted')
          ? <Route path="/auth/*" element={ <LoginPage/>}/>
          : <Route path="/*" element={ <CalendarPage/>} />
      }

      <Route path="/*" element={ <Navigate to="/auth/login"/>}/>
      
    </Routes>
  ) 
}
