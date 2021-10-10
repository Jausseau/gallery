import { Link } from "react-router-dom";
import RouterStyles from "./styles";

const AppNav = () => {
  return (
    <nav>
      <RouterStyles.NavList>
        <li>
          <Link to="/">Gallery</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </RouterStyles.NavList>
    </nav>
  );
};

export default AppNav;
