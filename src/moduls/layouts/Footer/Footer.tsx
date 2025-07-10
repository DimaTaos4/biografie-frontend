import styles from "./Footer.module.css";

import {
  BackToTop,
  GitHub,
  LinkedIn,
  Mail,
} from "../../../shared/components/icons/index";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop}>
        <button className={styles.backToTopBtn}>
          <BackToTop />
        </button>
        <p>Back to top</p>
      </div>

      <div className={styles.socialLinks}>
        <a target="blank" href="https://github.com/DimaTaos4">
          <GitHub size={40} color="white" />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/min-kuan-tao-226228350"
        >
          <LinkedIn size={40} color="white" />
        </a>
        <a target="blank" href="mailto:taominhquan2004@gmail.com">
          <Mail size={45} color="white" />
        </a>
      </div>

      <div className={styles.sign}>
        @2025 Tao Min Kuan
        <span className={styles.rights}>All Rights Reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
