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
    <img className="logo"
      alt="logo" src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" />
  </a>
)



const Header = () => {

  const [logginUser, setlogginUser] = useState(false)

  const isOnline = useOnline()

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> contact us </Link>
          <li>Cart</li>
          <Link to="/instamart"> Instamart </Link>
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