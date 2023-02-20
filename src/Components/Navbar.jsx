import "./navbar.css";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="menu">
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Packages</li>
        <li>Combo Packages</li>
        <li>About Us</li>
        <li>Industries</li>
        <li>Contact Us</li>
      </div>
      <div className="buttons">
        <div className="live_btn">
          <span>Log In</span>
        </div>
        <div className="contact_btn">
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
