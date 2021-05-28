import NavHeader from "./NavHeader";
import PrimaryNav from "./NavPrimaryNav";
import "./Nav.css";

const NavBar = () => {
  return (
    <header className="Nav">
      <NavHeader />
      <PrimaryNav />
    </header>
  );
};
export default NavBar;
