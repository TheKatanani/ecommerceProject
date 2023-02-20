import { lazy, Suspense, useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import PageNotFound from "./Components/PageNotFound"
import { AuthContext } from "./Context"
import Loading from "./Components/Loading"
const Home = lazy(()=>import("./Pages/Home"))
const Page2 = lazy(()=>import("./Pages/Page2"))
const Page3 = lazy(()=>import("./Pages/Page3"))
const Page4 = lazy(()=>import("./Pages/Page4"))
const Register = lazy(()=>import("./Pages/Register"))
const SignIn = lazy(()=>import("./Pages/SignIn"))
const PrivateRoute = lazy(()=>import("./PriveteRoutes"))
const MyRoutes = ()=>{
    const [ isAuthenticated,  ] = useContext(AuthContext);
    return (
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route index element={<Navigate to='/login' />} />
          <Route path="/login" element={isAuthenticated?<Navigate to='/Home' />:<SignIn/>} />
          <Route path="/register" element={isAuthenticated?<Navigate to='/Home' />:<Register />} />
          <Route path="/Home" element={<PrivateRoute/>}>
            <Route index element={<Home />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
            <Route path="*" element={<PageNotFound/>} />
          </Route>
            <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </Suspense>
    )
}
export default MyRoutes;