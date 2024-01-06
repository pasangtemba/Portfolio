import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorImage.png")}
              alt="Cursor icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have experience building responsive and optimized websites and
                web applications with JavaScript, React, HTML, CSS, and more.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverImage.png")}
              alt="Server icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have experience building fast and optimized backend systems
                and APIs with Node.js, Express.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorImage.png")}
              alt="UI icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>
                I have design multiple landing pages, websites, and have created
                designs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
