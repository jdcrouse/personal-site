import "./Nav.css";

const links = [
  { text: "About", path: "/about" },
  { text: "Music writing", path: "/music-writing" },
  { text: "Photography", path: "/photography" },
];

const PrimaryNavItem = ({ text, path }) => (
  <li className="primary-nav__item">
    <a className="primary-nav__link" href={path}>
      {text}
    </a>
  </li>
);

const PrimaryNav = () => (
  <nav className="primary-nav">
    <ul className="primary-nav__list">
      {links.map((link) => (
        <PrimaryNavItem text={link.text} path={link.path} />
      ))}
    </ul>
  </nav>
);

export default PrimaryNav;
