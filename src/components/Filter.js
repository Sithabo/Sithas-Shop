import { filters } from "../data/filterTypes";
import { useDispatch } from "react-redux";
import { filterGrocery } from "../reducers/filterReducer";
import Items from "./items";

function Filter () {
  const dispatch = useDispatch();

  return (
    <>
        <div className='hidden md:flex justify-center py-6'>
            <div style={{width: '85%', boxShadow: '0px 0px 2px 0 rgba(0, 0, 0, 0.2), 0 5px 2px 0 rgba(0, 0, 0, 0.1)'}} className='flex justify-evenly py-3 bg-white rounded-xl overflow-scroll' >
                {filters.map(
                    (filter) => {
                        return (
                            <div key={filter.name} className='rounded-2xl transition-all hover:bg-violet-800 hover:text-white cursor-pointer hover:px-2' onClick={()=>{dispatch(filterGrocery(filter.name))}}>
                                {filter.name}
                            </div>
                        )
                    }
                )}
            </div>
        </div>
        <Items />
    </>
  )
}

export default Filter;