import styles from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Oops! Page Not Found</h2>
        <p className={styles.description}>
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" className={styles.btnBackHome}>
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
