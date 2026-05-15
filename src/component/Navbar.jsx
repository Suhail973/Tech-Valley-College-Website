import { NavLink } from "react-router-dom";
import collegeLogo from '../images/collegeLogo.jpg'


const Navbar = () => {
  return (
    <>
      <div className="header">
        <img src={collegeLogo} className="logo" alt="College logo" width="200" height="80" />
        <h1>Tech Valley College</h1>
        <em className="italic">Empowering Future Innovators Since 1995</em>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/faculty">Faculty</NavLink>
          <NavLink to="/admissions">Admissions</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;