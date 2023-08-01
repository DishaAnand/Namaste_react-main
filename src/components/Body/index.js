import { useState, useEffect } from 'react';
import { restroList, swiggyData } from '../../shared/config';
import RestroCard from './RestroCard';
import ShimmerUI from '../../shared/ShimmerUI';
import { Link } from 'react-router-dom';
import { filterData } from '../../utils/Helper';
import useOnline from '../../utils/useOnline';


const Body = () => {
  //const searchTxt = "kfc" //creating variable in js

  //searchText is a local state variable
  const [allRestaurants, setallRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(); //to create state variables, returns an array with first one as variable name and second is the setfunction
  const [filteredrestro, setfileteredestro] = useState([]);

  // empty dependency => once after every render

  useEffect(() => {
    getRestaurants();
  }, []); // if we dont want to call useeffect after every rerender, we use "dependency" array, callback is called after every rerender
  // if empty array is called that means useeffect is called only once

  // async function getRestaurants(){
  //   const data = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.967134726313805&lng=80.18166393041611&page_type=DESKTOP_WEB_LISTING")
  //   const json = await data.json();

  const getRestaurants = () => {
    setTimeout(function () {
      setallRestaurants(swiggyData?.data?.cards?.[2]?.data?.data?.cards);
      setfileteredestro(swiggyData?.data?.cards?.[2]?.data?.data?.cards);
    }, 1000);
  };


  const isOnline = useOnline()

  if (!isOnline) {
    return <h1>Please check your internet connection</h1>
  }

  //Conditional Rendering
  //if rest is empty then shimmer ui else normal ui

  //not render components(early return)
  if (!allRestaurants) return null;

  // if(filteredrestro?.length ===0)
  //   return <h2>No restaurants found</h2>

  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className='searchContainer p-5 bg-pink-100 m-2'>
        <input
          type='text'
          className='focus:bg-gray-100 p-2 m-2'
          placeholder='Search'
          value={searchText}
          onChange={(e) => {
            //searchText = e.target.value; //cannot directly modify it like this in react
            setSearchText(e.target.value);
          }}
        />
        <button
          className='p-2 m-2 bg-purple-400 rounded-md hover:bg-purple-600'
          onClick={() => {
            //need to filter the data, passing "restro" in searchtext so that on click of search button it shld filter restro
            const data = filterData(searchText, allRestaurants);
            //update the state

            setfileteredestro(data);
          }}
        >
          Search
        </button>
      </div>
      <div className='flex flex-wrap'>
        {filteredrestro.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestroCard {...restaurant.data} />
            </Link>);
        })}

        {/* pass individual props */}
        {/* <RestroCard name = {restroList[0].data.name} cuisines = {restroList[0].data.cuisines}/> 
    <RestroCard name = {restroList[1].data.name} cuisines = {restroList[1].data.cuisines}/>
    <RestroCard name = {restroList[2].data.name} cuisines = {restroList[2].data.cuisines}/>
    <RestroCard name = {restroList[3].data.name} cuisines = {restroList[3].data.cuisines}/> */}

        {/* <RestroCard {...restroList[0].data}/>
    <RestroCard {...restroList[1].data}/>
    <RestroCard {...restroList[2].data}/>
    <RestroCard {...restroList[3].data}/>  */}
      </div >
    </>
  );
};

export default Body;