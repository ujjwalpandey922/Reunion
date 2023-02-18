import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://pixabay.com/get/gb32d869c200cfa3c03bde49ed57d4ce242f0169adc127379828c19a4ffe1de3fee9c186ffd416bc4f342a6edcc36cc02e1908f88255655db4e8809ba1ac8f2fe_640.png"
          alt="LOGO"
        />
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
