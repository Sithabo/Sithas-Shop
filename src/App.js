import './App.css';
import 'boxicons'
import Filter from './components/Filter';
import Header from './components/header';
import {Route, Routes} from 'react-router-dom'
import Cart from './components/cart';
import WishList from './components/WishList';
import Cover from './components/cover';

function App() {
  return (
      <div className="App">
        <Cover />
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Filter/>} />
                <Route path='/cart' element={<Cart />}/>
                <Route path='/wishlist' element={<WishList />} />
            </Route>
        </Routes>
      </div>
  );
}

export default App;