import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { ACTIONS } from '../Actions'
import { ProductsDataContext } from '../Context'
import productReducer, { initialState } from '../productReducer'

const ProductProvider = ({children}) => {
  
  const [state,dispatch]= useReducer(productReducer,initialState)
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(state.products));
  }, [state.products]);
  const getTotal = () =>{
        dispatch({
            type:ACTIONS.TOTAL_CARD,
        })
      }
    const addToCart = (id) =>{
      dispatch({
        type:ACTIONS.ADD_ITEM,
        payload:id
      })
      getTotal()
      }
      const removeFromCart = (id) =>{
        dispatch({
          type:ACTIONS.REMOVE_ITEM,
          payload:id
        })
        getTotal()
      }
      const removeAll = (id) =>{
        dispatch({
          type:ACTIONS.REMOVE_ALL
        })
        dispatch({
          type:ACTIONS.TOTAL_CARD,
          payload:0,
      })
    }
    const likeItem = (id) =>{
        dispatch({
            type:ACTIONS.UN_LIKE_ITEM,
            payload:id
        })
    }
    const value ={
      total:state.total,
      products:state.products,
      addToCart,
      removeAll,
      removeFromCart,
      likeItem
    }
  return (
    <ProductsDataContext.Provider value={value}>
        {children}
    </ProductsDataContext.Provider>
  )
}

export default ProductProvider;