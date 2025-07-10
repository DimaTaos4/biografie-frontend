import styles from "./HomePage.module.css";
import { Typewriter } from "react-simple-typewriter";

import SkillsHomePage from "./SkillsHomePage/SkillsHomePage";

const HomePage = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img
            src="../../../assets/wedding-photo.jpg"
            alt="Tao Min Kuan"
            className={styles.heroPhoto}
          />
          <h1>
            Hello! My Name is <span>Tao Min Kuan</span>
          </h1>
          <h2>
            <Typewriter
              words={[
                "I am a Full Stack Developer",
                "I build Web Applications",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
        </div>
      </section>
      <SkillsHomePage />
    </main>
  );
};

export default HomePage;
