import React from 'react';
import { items } from '../data/data';
import CartButton from './cartButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../reducers/WishListReducer';

function Items() {
    const filter = useSelector(state=>state.filter.key);
    const search = useSelector(state => state.search.value);
    const dispatch = useDispatch();

    return (
        <>  
            <div className='flex justify-center'>
                <div style={{width: '85%', backgroundColor: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} className='flex justify-center'>
                    <ul className='flex flex-wrap justify-center'>
                        {
                            items.filter(
                                item => {
                                    if (filter === 'All') {
                                        return item
                                    }
                                    else {
                                        return item.category === filter
                                    }
                                }
                            ).filter(
                                item=>{
                                    if(search !== '') {
                                        return item.title.toLowerCase().match(search.toLowerCase())
                                    }
                                    else {
                                        return item
                                    }
                                }
                            ).map(
                                item => {
                                    return (
                                        <li key={item.title} className='w-72 h-80 m-2 bg-slate-100 p-2 rounded-xl flex justify-between flex-col hover:scale-105 transition-all'>
                                                <div className='relative'>
                                                    <div className='absolute right-1 hover:cursor-pointer' title='Add to wishlist' onClick={()=>{dispatch(addToWishList(item))}}>
                                                            <box-icon name='bookmark-heart' color='red' size='md' animation='burst-hover'></box-icon>
                                                    </div>
                                                    <img src={item.image} alt={item.title}></img>
                                                </div>
                                                <div>
                                                    <div className='flex justify-around mt-1'>
                                                        <h2 className='font-bold'>{item.title}</h2>
                                                        <p className='font-bold'>{`$${item.price}`}</p>
                                                    </div>
                                                    <CartButton value={item}/>
                                                </div>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Items;