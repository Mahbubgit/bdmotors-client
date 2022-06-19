import { useEffect, useState } from "react";
const useItems = () =>{

    const [items, setItems] = useState([]);

    useEffect(() => {
        // fetch('items.json')
        fetch('https://young-caverns-50549.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
}

export default useItems;