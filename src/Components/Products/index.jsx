import useProducts from '../../Hook/useProducts'
import ProductCard from '../ProductCard'
import SliderControl from '../SliderControl'
import { ProductsStyled } from './styled'

const Products = ({isFull}) => {
    const {  products} = useProducts()

    const myData=()=>{
        if(isFull){
            return products.slice(0,6);
        }
        return products.slice(0,9);
    }
  return (
    <ProductsStyled full={isFull}>
        <div className="content2">
            {myData().map((el,i)=>(
                <ProductCard key={i} data={el} isFull={isFull}/>
            ))}
        </div>
        <SliderControl/>
    </ProductsStyled>
  )
}

export default Products