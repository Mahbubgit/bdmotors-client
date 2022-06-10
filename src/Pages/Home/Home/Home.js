
import FeatureProducts from '../../FeatureProducts/FeatureProducts';
import Gallery from '../../Gallery/Gallery';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <FeatureProducts></FeatureProducts>
      <Gallery></Gallery>
    </div>
  );
};

export default Home; 