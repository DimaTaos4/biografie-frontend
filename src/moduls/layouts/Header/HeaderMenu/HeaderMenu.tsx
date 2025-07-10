import styles from "./HeaderMenu.module.css";
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <ul className={styles.navbarMenu}>
      <NavLink to="/" className={styles.menu}>
        Home
      </NavLink>
      <NavLink to="/skills" className={styles.menu}>
        Skills
      </NavLink>
      <NavLink to="/portfolio" className={styles.menu}>
        Portfolio
      </NavLink>
    </ul>
  );
};
export default HeaderMenu;
