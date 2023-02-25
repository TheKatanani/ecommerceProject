import useProducts from '../../Hook/useProducts';
import { MoveToCart } from '../../Icons';
const AddToCartButton = ({id}) => {
  const {addToCart} = useProducts()
  return (
    <div className='Select' onClick={()=>addToCart(id)}>
        <MoveToCart/>
    </div>
  )
}

export default AddToCartButton