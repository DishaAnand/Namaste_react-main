import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL, SUBMIT_URL } from "../../shared/config";
import { IMG_CDN_URL } from "../../shared/config";
import useRestaurant from "../../utils/useRestaurant";

const RestaurantMenu = () => {
  const { restId } = useParams();
  // const [restro, setRestro] = useState({
  //   card0: {},
  //   card2: [],
  // });

  //custom Hook below
  const restro = useRestaurant(restId)

  const menuItems = (restro.card2 || [])
  menuItems.shift();
  const menuList = (menuItems.map(cards => cards?.card?.card?.itemCards) || [])
    .map(group => (group || []).map(cards => cards?.card?.info?.name))
    .reduce((foodList, food) => {
      foodList.push(...food);
      return foodList;
    }, [])



  return (
    <div>
      <div>
        <h1>restaurant id: {restId}</h1>
        {/* <h2>{restro.name}</h2> */}
        <h2>{restro.card0?.name || ''}</h2>
        <img src={IMG_CDN_URL + restro.card0.cloudinaryImageId} />
        <h3>{restro.card0?.areaName}</h3>
        <h3>{restro.card0?.slugs?.city}</h3>
        <h3>{restro.card0?.avgRating} Stars</h3>

      </div>
      <div>{console.log(Object.values(restro?.card2))}</div>
      <div>
        <h1>Menu</h1>
        <ul>
          {
            (menuList || []).map(food => <li> {food} </li>)
          }
        </ul>
      </div>

    </div>
  );
};

export default RestaurantMenu;
