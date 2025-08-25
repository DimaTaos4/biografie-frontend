import styles from "./PortfolioHomePage.module.css";
import projects from "../../../pages/PortfolioPage/PortfoliosMenu";
import { Link } from "react-router-dom";

const PortfolioHomePage = () => {
  return (
    <section className={styles.portfolioSection}>
      <Link to="/portfolio" className={styles.linkToPortfolio}>
        Portfolio
      </Link>
      <div className={styles.projectPreviewGrid}>
        {projects.slice(0, 3).map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioHomePage;
