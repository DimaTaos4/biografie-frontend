import styles from "./FooterMini.module.css";
import { GitHub, LinkedIn, Mail } from "../icons/index";

const FooterMini = () => {
  return (
    <div className={styles.footerMini}>
      <div className={styles.socialLinks}>
        <a target="blank" href="https://github.com/DimaTaos4">
          <GitHub size={30} color="white" />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/min-kuan-tao-226228350"
        >
          <LinkedIn size={30} color="white" />
        </a>
        <a target="blank" href="mailto:taominhquan2004@gmail.com">
          <Mail size={35} color="white" />
        </a>
      </div>

      <div className={styles.sign}>
        @2025 Tao Min Kuan
        <span className={styles.rights}>All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default FooterMini;
