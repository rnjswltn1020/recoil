import { NavLink } from "react-router-dom";

function Header() {
  const style = { color: "hotpink", fontWeight: "bolid", fontSize: 20 };
  return (
    <header>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={style}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/sub" activeStyle={style}>
            Sub
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
