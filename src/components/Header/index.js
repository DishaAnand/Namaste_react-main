import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

//import Logo from '../assets/img/food.jpg';

// const authenticateUser = ()=>{
//   return true
// }


// const Title = () =>(
//   <a href="/">
//     <img
//       classNmae = "Logo"
//       alt = "logo"
//       src = {Logo}
//     />
//   </a> 
// )

const Title = () => (
  <a href="/">
    <img className="h-28 px-4"
      alt="logo" src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" />
  </a>
)



const Header = () => {

  const [logginUser, setlogginUser] = useState(false)

  const isOnline = useOnline()

  return (
    <div className="flex justify-between bg-pink-100 shadow-md sm:bg-blue-100">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 ">
          <Link to="/"><li className="px-2"> Home </li></Link>
          <Link to="/about"><li className="px-2">  About </li></Link>
          <Link to="/contact"> <li className="px-2">contact us </li></Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart"><li className="px-2">  Instamart </li></Link>
        </ul>
      </div>
      <h1>{isOnline ? '✅' : '❌'}</h1>
      {
        logginUser
          ? <button onClick={() => setlogginUser(false)}>Logout</button>
          : <button onClick={() => setlogginUser(true)}>Login</button>
      }



    </div>
  );
};

export default Header;