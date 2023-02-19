import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  const links = [
    { name: "Shop", url: "/" },
    { name: "Colecciones", url: "/" },
    { name: "Sobre nosotros", url: "/" },
  ];
  return (
    <nav className="NavBar">
      <div className="NavBar-Logo-Container">
        <span className="NavBar-Logo">
          Clever.
        </span>
      </div>
      <ul className="NavBar-container">
        {links &&
          links.map((link) => {
            return (
              <li className="NavBar-Link-Container">
                <a href={link.url} className="NavBar-Link">{link.name}</a>
              </li>
            );
          })}
      </ul>
      <div className="CartWidget-container">
        <CartWidget/>
      </div>
    </nav>
  );
}

export default NavBar;
