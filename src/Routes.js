import { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import PageNotFound from "./Components/PageNotFound"
import { AuthContext } from "./Context"
import Home from "./Pages/Home"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import Page4 from "./Pages/Page4"
import Register from "./Pages/Register"
import SignIn from "./Pages/SignIn"
import PrivateRoute from "./PriveteRoutes"

const MyRoutes = ()=>{
    const [ isAuthenticated,  ] = useContext(AuthContext);
    return (
        <Routes>
          <Route index element={<Navigate to='/login' />} />
          <Route path="/login" element={isAuthenticated?<Navigate to='/Home' />:<SignIn/>} />
          <Route path="/register" element={isAuthenticated?<Navigate to='/Home' />:<Register />} />
          <Route path="/Home" element={<PrivateRoute></PrivateRoute>}>
            <Route index element={<Home />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
            <Route path="*" element={<PageNotFound/>} />
          </Route>
            <Route path="/*" element={<PageNotFound/>} />
        </Routes>
    )
}
export default MyRoutes;