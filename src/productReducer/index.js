import { ACTIONS } from "../Actions";
import { productsData as products } from "../Mock"
const savedProducts =localStorage.getItem('products');
const getProducts=()=>{
    return savedProducts ? JSON.parse(savedProducts)  : products
}
export const initialState = {
    products:getProducts(),
    total:getProducts().reduce((count, item) => count + (item.isSelected ? 1 : 0), 0),
}

const productReducer = (state,action) => {
    const { type , payload } = action;
    switch(type){
        case ACTIONS.ADD_ITEM:
            return {...state,
                products:state.products.map(el=>el.id===payload?(
                    {...el,isSelected:(el.isSelected?false:true)}
                ):el)} 
        case ACTIONS.REMOVE_ITEM:
            return {...state,
                products:state.products.map(el=>el.id===payload?(
                    {...el,isSelected:false}
                ):el)} 
        case ACTIONS.REMOVE_ALL:
            return {...state,
                products:state.products.map(el=>({...el,isSelected:false})) 
            } 
        case ACTIONS.UN_LIKE_ITEM:
            return {...state,
                products:state.products.map(el=>el.id===payload?(
                    {...el,isLike:(el.isLike?false:true)}
                ):el)}  
        case ACTIONS.TOTAL_CARD:
            return {...state,total:state.products.reduce((count, item) => count + (item.isSelected ? 1 : 0), 0)} 
        default : 
        throw new Error(`no case for type ${type} in the reducer`)
    }
}
export default productReducer;