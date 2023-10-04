import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import WishListButton from './wishListButton'

function WishList() {

  const wishlist = useSelector(state => state.wishlist)

  return (
    <>
        <div className='flex flex-col items-center'>
            <div className='w-11/12'>
                <div className='bg-slate-100 my-3 mb-5 rounded-xl text-right p-3 flex justify-between items-center'>
                    <div className='text-2xl font-bold'>
                        WishList
                    </div>
                    <Link to='/'>
                    <button className='flex'>
                        <box-icon name='arrow-back' ></box-icon>
                        Back to Grocery
                    </button>
                </Link>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-11/12 flex m-2'>
                            {
                                wishlist.map(
                                    item => {
                                        return (
                                            <li key={item.title} className='w-72 h-96 m-2 bg-slate-100 p-2 rounded-xl flex justify-between flex-col'>
                                                <div className='relative'>
                                                    <img src={item.image} alt={item.title}></img>
                                                </div>
                                                <div>
                                                    <div className='flex justify-around mt-1'>
                                                        <h2 className='font-bold'>{item.title}</h2>
                                                        <p className='font-bold'>{`$${item.price}`}</p>
                                                    </div>
                                                </div>
                                                <div className='justify-center flex'>
                                                    <WishListButton value={item}/>
                                                </div>
                                        </li>
                                        )
                                    }
                                )
                            }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WishList