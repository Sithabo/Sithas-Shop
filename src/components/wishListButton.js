import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWishList } from '../reducers/WishListReducer';
import { addWishlist } from '../reducers/cartReducer';

function WishListButton({value}) {
  const dispatch = useDispatch();

  return (
      <div className='flex flex-col item-center'>
        <button className='bg-green-500 rounded-lg w-11/12 hover:bg-green-700 transition-all mb-3' 
        onClick={()=>{
            dispatch(addWishlist(value))
            dispatch(removeWishList(value))
            }}>
          <div className='flex p-1 px-2 items-center justify-evenly'>
              <h3 className='text-white'>Add To Cart</h3>
              <box-icon name='cart-alt' color='white' size='md'></box-icon>
          </div>
        </button>
        <button className='bg-red-500 rounded-lg w-11/12 hover:bg-red-700 transition-all' onClick={()=>{dispatch(removeWishList(value))}}>
          <div className='flex p-1 px-2 items-center justify-evenly'>
              <h3 className='text-white'>Remove from WishList</h3>
              <box-icon name='cart-alt' color='white' size='md'></box-icon>
          </div>
        </button>
      </div>
  )
}

export default WishListButton