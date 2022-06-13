
import FeatureProducts from '../../FeatureProducts/FeatureProducts';
import Gallery from '../../Gallery/Gallery';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';

const Home = () => {
  const homePage = true;
  return (
    <div>
      <Banner></Banner>
      <Items
        homePage={homePage}
      ></Items>
      <FeatureProducts
        homePage={homePage}
      ></FeatureProducts>
      <Gallery></Gallery>
    </div>
  );
};

export default Home; 