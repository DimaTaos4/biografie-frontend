import styles from "./Header.module.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";

import { HamburgerMenu } from "../../../shared/components/icons/index";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <IntegrationInstructionsOutlinedIcon
          fontSize="inherit"
          className={styles.logoCode}
        />
      </a>
      <HeaderMenu />
      <div className={styles.hamburgerMenu}>
        <HamburgerMenu />
      </div>
    </nav>
  );
};
export default Header;
