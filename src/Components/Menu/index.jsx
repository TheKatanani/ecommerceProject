import { Link } from "react-router-dom"
import { About, Categories, ContactUs, Favorites, Home, Language, MyOrders } from "../../Icons"
import Avater from "../Avater"
import Toggle from "../Toggle"
import { MenuStyled } from "./styeld"

const Menu = ({show}) => {
  return (
    <MenuStyled  {...{show}}>
        <header>
            <Avater/>
            <p>Sign in | Register</p>
        </header>
        <ul>
            <li>
                <Link to="/Home/"> 
                    <div className="iconArea"><Home/></div>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link to="/Home/page2"> 
                    <div className="iconArea"><Categories/></div>
                    <p>Categories</p>
                </Link>
            </li>
            <li>
                <Link to="/Home/page3"> 
                    <div className="iconArea"><Favorites/></div>
                    <p>Favorites</p>
                </Link>
            </li>
            <li>
                <Link to="/Home/page4"> 
                    <div className="iconArea"><MyOrders/></div>
                    <p>My orders</p>
                </Link>
            </li>
            <li>
                <Link to=""> 
                    <div className="iconArea"><Language/></div>
                    <p>English | USD</p>
                </Link>
            </li>
            <li>
                <Link to=""> 
                    <div className="iconArea"><ContactUs/></div>
                    <p>Contact us</p>
                </Link>
            </li>
            <li>
                <Link to=""> 
                    <div className="iconArea"><About/></div>
                    <p>About</p>
                </Link>
            </li>
            <li>
                <Link to=""> 
                    <div className="iconArea"></div>
                    <p>User agreement</p>
                </Link>
            </li>
            <li>
                <Link to=""> 
                    <div className="iconArea"></div>
                    <p>Partnership</p>
                </Link>
            </li>
            <li>
                <Link to=""> 
                    <div className="iconArea"></div>
                    <p>Privacy policy</p>
                </Link>
            </li>
            <li><Toggle/></li>
        </ul>
    </MenuStyled>
  )
}

export default Menu