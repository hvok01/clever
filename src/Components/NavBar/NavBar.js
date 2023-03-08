import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  const links = [
    { name: "All", url: "/all" },
    { name: "Tops", url: "/collections/1" },
    { name: "bottoms", url: "/collections/2" },
    { name: "Accesories", url: "/collections/3" },
  ];
  return (
    <nav className="NavBar">
      <div className="NavBar-Logo-Container">
        <span className="NavBar-Logo">
          <Link to={"/"}>Clever.</Link>
          
        </span>
      </div>
      <ul className="NavBar-container">
        {links &&
          links.map((link, key) => {
            return (
              <li className="NavBar-Link-Container" key={key}>
                <Link to={link.url} className="NavBar-Link">{link.name}</Link>
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
