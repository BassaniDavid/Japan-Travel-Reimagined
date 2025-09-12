import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid d-flex justify-content-around align-items-center sticky-top px-2">
      <NavLink className="header-logo" to="/Japan-Travel-Reimagined/"></NavLink>
      <div className="header-links d-none  d-sm-flex justify-content-around align-items-center">
        <NavLink to="/Japan-Travel-Reimagined/scopri-giappone" className="">
          scopri il Giappone
        </NavLink>
        <NavLink to="/Japan-Travel-Reimagined/organizza-viaggio" className="">
          programma il tuo viaggio
        </NavLink>
      </div>
      <div class="dropdown hamburger-menu">
        <button
          class="button dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu">
          <li>
            <NavLink to="/Japan-Travel-Reimagined/scopri-giappone" className="">
              scopri il Giappone
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Japan-Travel-Reimagined/organizza-viaggio"
              className=""
            >
              programma il tuo viaggio
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
