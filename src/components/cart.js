import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartButton from './cartButton'
import deliveryTruck from '../images/delivery-truck.png'
import { removeAllOrders, removeOrder } from '../reducers/cartReducer'

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
    const taxRate = 0.0625; // 6.25%

    const sumTotal = cart.reduce((acc = {}, item = {}) => {
      const itemTotal = parseFloat((item.price * item.order).toFixed(2));
      const itemTotalTax = parseFloat((itemTotal * taxRate).toFixed(2));

      acc.subtotal = parseFloat((acc.subtotal + itemTotal).toFixed(2));
      acc.tax = parseFloat((acc.tax + itemTotalTax).toFixed(2));
      acc.total = parseFloat((acc.total + itemTotal + itemTotalTax).toFixed(2));

      return acc;
      }, {
      subtotal: 0,
      tax: 0,
      total: 0
      });

  return (
    <>
        <div className='flex flex-col items-center'>
            <div className='w-11/12'>
                <div className='bg-slate-100 my-3 mb-5 rounded-xl text-right p-3 flex justify-between items-center'>
                    <div className='text-2xl font-bold'>
                        Cart
                    </div>
                    <Link to='/'>
                    <button className='flex'>
                        <box-icon name='arrow-back' ></box-icon>
                        Back to Grocery
                    </button>
                </Link>
                </div>
                <div className='flex flex-wrap justify-around'>
                    <div className='flex flex-wrap m-2 flex-col items-center justify-start'>
                            {
                                cart.filter(
                                  item => {
                                    return item.order > 0
                                  }
                                ).map(
                                  item => {
                                      return (
                                          <li key={item.title} className='md:w-[600px] w-[240px] m-2 bg-slate-100 p-2 rounded-xl flex flex-wrap justify-between items-center pr-14 relative'>
                                              <div className='relative flex flex-wrap items-center'>
                                                  <img src={item.image} alt={item.title} className=' w-40 h-28'></img>
                                                  <div className=' m-2'>
                                                      <div className='flex justify-around flex-col'>
                                                          <h2 className=''>{item.title}</h2>
                                                          <p className=''>{`$${(item.price * item.order).toFixed(2)}`}</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div>
                                                  
                                                  <div className='justify-center flex'>
                                                      <CartButton value={item} shoppingCart={true}/>
                                                  </div>
                                              </div>
                                              <button onClick={()=>{dispatch(removeOrder(item))}} className='absolute top-3 right-3'>
                                                <box-icon name='x'></box-icon>
                                              </button>
                                      </li>
                                      )
                                  }
                              )
                            }
                    </div>
                    <div style={{backgroundColor: '#ffdeadbd'}} className='w-[345px] h-[535px] flex flex-col shadow-2xl min-w-[250px] shadow-slate-300 m-4 rounded-lg p-4'>
                            <div>
                                <p>SubTotal    | {`$${sumTotal.subtotal}`}</p>
                                  <p>  Tax       | {`$${sumTotal.tax}`}</p>
                                <p>Total in Cart | {`$${sumTotal.total}`}</p>
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex justify-center flex-col mt-4 italic'>
                                  <p>Free Shipping to all customers</p>
                                  <img src={ deliveryTruck } alt='free delivery' className=' w-52 h-52'></img>
                                </div>
                            </div>
                            <div className='flex justify-center items-center text-xl font-semibold pt-5'>
                                Amount Payable | {`$${sumTotal.total}`}
                            </div>
                            <div className='flex justify-center pt-6'>
                                <button className='bg-blue-500 rounded-lg w-11/12 hover:bg-blue-700 transition-all' 
                                  onClick={
                                    ()=>{
                                      alert(`Perfect! Your Order Total comes to $${sumTotal.total} \n Here is your receipt: \n Subtotal: $${sumTotal.subtotal}\n Tax: $${sumTotal.tax}\n Total Amount: $${sumTotal.total} \n \n Thank You For Choosing Us Today!!
                                      `)
                                    }
                                  }>
                                  <div className='flex p-1 px-2 items-center justify-evenly'>
                                      <h3 className='text-white'>Proceed To Checkout</h3>
                                      <box-icon name='cart-alt' color='white' size='md'></box-icon>
                                  </div>
                                </button>
                            </div>
                            <div className='flex justify-center pt-5'>
                                <button onClick={()=>{dispatch(removeAllOrders())}} className='bg-red-500 rounded-lg w-11/12 hover:bg-red-700 transition-all  h-11'>
                                  <div className='flex p-1 px-2 items-center justify-evenly'>
                                      <h3 className='text-white'>Remove All Items</h3>
                                      
                                  </div>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart