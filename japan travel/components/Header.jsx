import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid d-flex justify-content-around align-items-center sticky-top px-2">
      <NavLink className="header-logo" to="/"></NavLink>
      <div className="header-links d-none  d-sm-flex justify-content-around align-items-center">
        <NavLink to="/scopri-giappone" className="">
          scopri il Giappone
        </NavLink>
        <NavLink to="/organizza-viaggio" className="">
          programma il tuo viaggio
        </NavLink>
      </div>
      <div className="dropdown hamburger-menu">
        <button
          className="button dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul className="dropdown-menu">
          <li>
            <NavLink to="/scopri-giappone" className="">
              scopri il Giappone
            </NavLink>
          </li>
          <li>
            <NavLink to="/organizza-viaggio" className="">
              programma il tuo viaggio
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
