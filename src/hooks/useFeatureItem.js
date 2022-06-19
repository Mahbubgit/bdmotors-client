import { useEffect, useState } from "react";
const useFeatureItem = () => {

    const [featureItems, setFeatureItems] = useState([]);

    useEffect(() => {
        // fetch('featureProduct.json')
        fetch('https://young-caverns-50549.herokuapp.com/featureProduct')
            .then(res => res.json())
            .then(data => setFeatureItems(data));
    }, []);
    return [featureItems, setFeatureItems];
}

export default useFeatureItem;
