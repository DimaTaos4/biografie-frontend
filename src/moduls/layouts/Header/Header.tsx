import styles from "./Header.module.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import { HamburgerMenu } from "../../../shared/components/icons/index";
import { useEffect, useState } from "react";
import clsx from "clsx";

type HeaderProps = {
  onHamburgerClick: () => void;
};

const Header = ({ onHamburgerClick }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx(styles.navbar, scrolled && styles.navbarScrolled)}>
      <a href="/">
        <IntegrationInstructionsOutlinedIcon
          fontSize="inherit"
          className={styles.logoCode}
        />
      </a>
      <HeaderMenu />
      <button className={styles.hamburgerMenu} onClick={onHamburgerClick}>
        <HamburgerMenu />
      </button>
    </nav>
  );
};

export default Header;
