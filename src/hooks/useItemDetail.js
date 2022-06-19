import { useEffect, useState } from "react"

const useItemDetail = id =>{
    const [item, setItem] = useState([]);
    useEffect(() =>{
        const url = `https://young-caverns-50549.herokuapp.com/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
    }, [id]);
    
    return [item]
}

export default useItemDetail;