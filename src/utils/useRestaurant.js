import { useState, useEffect } from "react";
import { RESTAURANT_URL, SUBMIT_URL } from "../shared/config";

const useRestaurant = (restId) => {
    const [restro, setRestro] = useState({
        card0: {},
        card2: [],
    });

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(RESTAURANT_URL + restId + SUBMIT_URL)
        const json = await data.json();
        //console.log(json)
        setRestro(prevState => ({
            ...prevState,
            card0: json.data?.cards?.[0]?.card?.card?.info,
            card2: json.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        }));
    }

    return restro;
}

export default useRestaurant;