
import FeatureProducts from '../../FeatureProducts/FeatureProducts';
import Gallery from '../../Gallery/Gallery';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
  const homePage = true;
  return (
    <div>
      <Banner></Banner>
      <div className='mt-3'>
        <Items
          homePage={homePage}
        ></Items>
        <a className='btn btn-secondary' href="/products">Manage Inventory</a>
      </div>

      <div className='mt-3'>
        <FeatureProducts
          homePage={homePage}
        ></FeatureProducts>
        <a className='btn btn-secondary' href="/featuredProduct">Show All Featured Products</a>
      </div>
      <div className='w-75 mx-auto mb-3'>
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home; 