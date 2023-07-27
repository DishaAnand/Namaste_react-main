import { Outlet } from "react-router-dom";
import ProfileFunc from "./Profile";
import Profile from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <ProfileFunc name={"bee"} />
      <Profile />
    </div>

  )
}

export default About;