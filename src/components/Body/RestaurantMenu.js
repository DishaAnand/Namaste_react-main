import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { name_Saleem_Url } from "../../shared/config";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restro, setRestro] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

   function getRestaurantInfo() {
//     const data = await fetch(name_Saleem_Url)
//     const json = await data.json();
//     setRestro(json.data);
//   }
      fetch(name_Saleem_Url)
      .then(data=>data.json())
      .then(data=>setRestro(data))
   // const json =  data.json();
   // setRestro(json.data);
  }
  

  return (
    <div>
      <h1>restaurant id: {id}</h1>
      {restro.name && <h2>hi {restro.name}</h2>}
    </div>
  );
};

export default RestaurantMenu;
