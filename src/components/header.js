import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchItems } from '../reducers/searchReducer';
import { Outlet, Link } from 'react-router-dom'


function Header() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const navref = useRef();
    
    const toggleNav = () => {
        navref.current.classList.toggle('navbar')
    }

    const wishlist = useSelector(state => state.wishlist.length)
    const orders = cart.filter(item => {return item.order > 0}).length

    useEffect(
        ()=>{
            dispatch(searchItems(search))
        }
        , [search])
        
    const handleSearch = ({target}) => {
      setSearch(target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setSearch('');
    }
    
    return (
        <>
            <header className="App-header flex justify-around p-5 bg-violet-500 sticky top-0 z-[1]">
                <div className='flex items-center'>
                    <box-icon type='solid' name='store' color='white' ></box-icon>
                    <h1 className='text-white text-2xl text-center'>Cheesey Grocer</h1>
                </div>
                <div className='items-center'>
                    <div className='hidden md:flex'>
                        <form onSubmit={handleSubmit} className='flex'>
                            <input name='searchBar' type='text' placeholder='search...' value={search} onChange={handleSearch} className='h-9 placeholder:italic rounded-xl p-3'/>
                            <div className='px-2'><box-icon name='search-alt-2' color='white' size='md'></box-icon></div>
                        </form>
                    </div>
                    <div className='flex md:hidden' onClick={toggleNav}>
                            <box-icon name='menu' color='white' size='lg'></box-icon>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <div className='px-4 relative'>
                        <Link to='/cart'>
                            <box-icon name='cart-alt' color='white' size='md'></box-icon>
                        </Link>
                        {
                            orders > 0 
                                ? <div className='bg-[#ef4b4be8] absolute w-6 rounded-2xl flex justify-center right-[1px] bottom-[1px]'>
                                    <span className='text-white'>{orders}</span>
                                  </div> 
                                : ''
                        }
                    </div>
                    <div className='relative'>
                        <Link to='/wishlist'>
                            <box-icon name='shopping-bag' color='white' size='md'></box-icon>
                        </Link>
                        {
                            wishlist > 0
                            ?   <div className='bg-[#ef4b4be8] absolute w-6 rounded-2xl flex justify-center right-[-8px] bottom-[1px]'>
                                    <span className='text-white'>{wishlist}</span>
                                </div> : ''
                        }
                    </div>
                </div>
            </header>
            {/* second potion */}
            {/* navbar component */}
            <div className='relative'>
                <div>
                    <div className='items-center p-3'>
                        <div className='flex md:hidden justify-center'>
                            <form onSubmit={handleSubmit} className='flex'>
                                <input name='searchBar' type='text' placeholder='search...' value={search} onChange={handleSearch} className='h-9 placeholder:italic bg-slate-200 rounded-xl p-3'/>
                                <div className='px-2'><box-icon name='search-alt-2' color='violet' size='md'></box-icon></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div ref={navref} className='bg-violet-500 fixed w-full h-[100vh] z-10 top-[88px] flex-col transition-all duration-300 left-[-100%] items-center p-12 flex md:hidden'>
                        <div className='items-center'>
                            
                            <div className='flex flex-col' onClick={toggleNav}>
                                <div className='px-4 relative border-b-2 pb-4'>
                                        <Link to='/'>
                                            <div className='flex items-center justify-evenly w-32'>
                                                <box-icon name='home-alt' color='white' size='md'></box-icon>
                                                <h2 className='text-white'>Home</h2>
                                            </div>
                                        </Link>
                                </div>
                                <div className='px-4 relative border-b-2 pt-3 pb-4'>
                                        <Link to='/cart'>
                                            <div className='flex items-center justify-evenly w-32'>
                                                <box-icon name='cart-alt' color='white' size='md'></box-icon>
                                                <h2 className='text-white'>Cart</h2>
                                            </div>
                                        </Link>
                                    {
                                        orders > 0 
                                            ? <div className='bg-[#ef4b4be8] absolute w-6 rounded-2xl flex justify-center right-[1px] bottom-[1px]'>
                                                <span className='text-white'>{orders}</span>
                                            </div> 
                                            : ''
                                    }
                                </div>
                                <div className='px-4 relative pt-3 border-b-2 pb-4'>
                                        <Link to='/wishlist'>
                                            <div className='flex items-center justify-evenly w-32'>
                                                <box-icon name='shopping-bag' color='white' size='md'></box-icon>
                                                <h2 className='text-white'>Wishlist</h2>
                                            </div>
                                        </Link>
                                        {
                                            wishlist > 0
                                            ?   <div className='bg-[#ef4b4be8] absolute w-6 rounded-2xl flex justify-center right-[-8px] bottom-[1px]'>
                                                    <span className='text-white'>{wishlist}</span>
                                                </div> : ''
                                        }
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header