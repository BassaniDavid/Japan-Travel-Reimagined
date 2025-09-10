import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid d-flex justify-content-around align-items-center shadow sticky-top">
      <NavLink className="header-logo" to="/"></NavLink>
      <NavLink to="/scopri-giappone" className="">
        scopri il Giappone
      </NavLink>
      <NavLink to="/organizza-viaggio" className="">
        programma il tuo viaggio
      </NavLink>
    </header>
  );
};

export default Header;
