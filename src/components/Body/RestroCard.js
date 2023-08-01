
import { IMG_CDN_URL } from '../../shared/config';

const RestroCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {

  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        + cloudinaryImageId} />
      <h2 className='font-bold text-xl'>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}

export default RestroCard;