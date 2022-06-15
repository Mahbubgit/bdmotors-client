import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import FeatureProducts from './Pages/FeatureProducts/FeatureProducts';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import AddItem from './Pages/AddItem/AddItem';
import MyItem from './Pages/MyItem/MyItem';
import Items from './Pages/Items/Items';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/featuredProduct' element={<FeatureProducts></FeatureProducts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        {/* <Route path='/inventory/:id' element={<ItemDetail></ItemDetail>}></Route> */}

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
