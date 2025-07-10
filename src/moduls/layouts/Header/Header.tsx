import styles from "./Header.module.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";

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
    </nav>
  );
};
export default Header;
