import { useState } from "react";
import styles from "./PortfolioPage.module.css";
import projects from "./PortfoliosMenu";

const PortfolioPage = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.portfolioPage}>
      <h2 className={styles.title}>My projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => {
          const isExpanded = expandedCards.includes(project.id);
          return (
            <div key={project.id} className={styles.card}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageLink}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.webImage}
                />
              </a>
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p
                  className={`${styles.description} ${
                    isExpanded ? styles.expanded : ""
                  }`}
                >
                  {project.description}
                </p>
                {project.description.length > 250 && (
                  <button
                    className={styles.readMoreBtn}
                    onClick={() => toggleExpand(project.id)}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioPage;
