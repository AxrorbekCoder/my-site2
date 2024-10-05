import { Outlet, Link } from "react-router-dom";
import './style.css'
import logo from './imges/logo.png';
import Footer from './Footer';
const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-nav">
          <Link to="/">
          <img src={logo} alt="Logo"  className="logo"/>
            <h3>Coders</h3>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;