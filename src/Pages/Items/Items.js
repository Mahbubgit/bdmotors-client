import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css';

const Items = ({ homePage }) => {
    const [items] = useItems();
    
    return (
        <div className='container'>
            <h1 className='text-secondary text-center'>Inventory</h1>
            <div className="product-container">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                        homePage={homePage}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;