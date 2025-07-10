import styles from "./SkillsHomePage.module.css";

import { Link } from "react-router-dom";

import skills from "../../../shared/components/SkillItems/SkillItems";

const SkillsHomePage = () => {
  return (
    <div className={styles.skillsContainer}>
      <Link to="/skills" className={styles.linkToSkills}>Skills</Link>
      <div className={styles.skillsOptions}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.iconWrapper}>
            {skill.icon}
            <span className={styles.tooltip}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsHomePage;
