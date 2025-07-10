import styles from "./SkillsPage.module.css";
import skills from "../../shared/components/SkillItems/SkillItems";

const SkillsPage = () => {
  return (
    <section className={styles.skillsPage}>
      <h2>Skills</h2>
      <div className={styles.skillItems}>
        {skills.map((skill, index) => (
          <div className={styles.skillBlock} key={index} title={skill.name}>
            {skill.icon}
            <span className={styles.nameSkill}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
