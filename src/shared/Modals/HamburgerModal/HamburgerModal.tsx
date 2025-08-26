import styles from "./HamburgerModal.module.css";
import { NavLink } from "react-router-dom";
import FooterMini from "../../components/FooterMini/FooterMini";

type Props = {
  onClose: () => void;
};

const HamburgerModal = ({ onClose }: Props) => {
  return (
    <section className={styles.overlay} onClick={onClose}>
      <div
        className={styles.hamburgerModal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <nav className={styles.navLinks}>
          <NavLink onClick={onClose} to="/">
            Home
          </NavLink>
          <NavLink onClick={onClose} to="/skills">
            Skills
          </NavLink>
          <NavLink onClick={onClose} to="/portfolio">
            Portfolio
          </NavLink>
        </nav>

        <div className={styles.footerWrapper}>
          <FooterMini />
        </div>
      </div>
    </section>
  );
};

export default HamburgerModal;
