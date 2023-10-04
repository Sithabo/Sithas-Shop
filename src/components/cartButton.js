import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartDecrement, cartIncrement } from '../reducers/cartReducer';

function CartButton({value, shoppingCart}) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true)

  const order = cart.filter(item=> item.title === value.title)[0].order;
  const quantity = cart.filter(item => item.title === value.title)[0].quantity;

  const handleDecrement = () => {
      if(order > 0) {
        dispatch(cartDecrement(value))
      }
  }
  
  const handleIncrement = () => {
      if(order < quantity) {
        dispatch(cartIncrement(value))
      }
    }

  return (
    <div className=' flex justify-center mt-2'>
        {
          !shoppingCart && show && (order===0) ? 
          <button className='bg-blue-500 rounded-lg w-11/12 hover:bg-blue-700 transition-all' onClick={()=>{setShow((prev)=>{return !prev})}}>
              <div className='flex p-1 px-2 items-center justify-evenly'>
                  <h3 className='text-white'>Add To Cart</h3>
                  <box-icon name='cart-alt' color='white' size='md'></box-icon>
              </div>
          </button> : 
          <div className='flex'>
              <button className='bg-red-500 rounded-lg hover:bg-red-700 transition-all text-white w-14 h-11 text-2xl' onClick={handleDecrement}>
                -
              </button>
                      <div className='flex items-center p-2 text-lg' onClick={()=>{setShow((prev)=>{return !prev})}}>

                        {order} / {quantity}

                      </div>
              <button className='bg-green-500 rounded-lg hover:bg-green-700 transition-all text-white w-14 h-11 text-2xl' onClick={handleIncrement}>
                    +
              </button>
          </div>
        }
    </div>
  )
}

export default CartButton;