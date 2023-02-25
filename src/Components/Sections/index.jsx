import { Link } from 'react-router-dom'
import useProducts from '../../Hook/useProducts'
import { Message, MyCart, Orders, Profile } from '../../Icons'
import { SectionsStyle } from './Styled'

const Sections = () => {
  const { total} = useProducts()

  return (
    <SectionsStyle productLength = {total}>
      <Link to="/Home/" className="icon">
        <Profile />
        <p>Profile</p>
      </Link>
      <Link to="/Home/page2" className="icon">
        <Message />
        <p>Message</p>
      </Link>
      <Link to="/Home/page3" className="icon">
        <Orders />
        <p>Orders</p>
      </Link >
      <Link to="/Home/page4" className="icon">
        <MyCart />
        <p>My cart</p>
      </Link >
    </SectionsStyle>
  )
}

export default Sections
