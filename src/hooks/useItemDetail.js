import { useEffect, useState } from "react"

const useItemDetail = id =>{
    const [item, setItem] = useState([]);
    useEffect(() =>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
    }, [id]);
    
    return [item]
}

export default useItemDetail;