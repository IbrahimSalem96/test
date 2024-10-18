import "./header.css";
import { Container, Image } from "react-bootstrap";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Image
import LogoHeader from "../../assets/GN-LOGO.svg";
import barMobile from "../../assets/bar.svg";
import barMobileOpen from "../../assets/openNav.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [barNav, setBarNav] = useState(false);

  const showNavMobile = () => {
    setShowNav(!showNav);
    setBarNav(!barNav);
  };
  return (
    <Container>
      <header className="header">
        <div className="mobileView">
          <Image
            src={barNav ? barMobileOpen : barMobile}
            className="barMenue"
            alt="image bar"
            onClick={() => showNavMobile()}
          />
          <Image src={LogoHeader} className="LogoHeader" alt="Logo image" />
        </div>

        <div className={showNav ? "showNav showNavActive" : "showNav"}>
          <ul>
            <li>
              <Link to="/" className="activeLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/buy">Buy</Link>
            </li>
            <li>
              <Link to="/sell">Sell</Link>
            </li>
          </ul>
        </div>

        <div className="desktopView">
          <ul>
            <li>
              <Link to="/">
                <Image
                  src={LogoHeader}
                  className="LogoHeader"
                  alt="Logo image"
                />
              </Link>
            </li>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <NavLink
                to="/buy"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Buy
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/sell"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Sell
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </Container>
  );
};

export default Header;
