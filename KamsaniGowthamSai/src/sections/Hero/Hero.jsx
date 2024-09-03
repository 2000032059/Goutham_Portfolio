import React, { useState, useEffect } from 'react';
import styles from './HeroStyles.module.css';
import Ai from '../../assets/Ai_P.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import GouthamResume from '../../assets/Goutham_resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Array of roles
  const roles = ["Freelancer","Software Engineer", "Full stack developer", "Android Developer", "Programmer" ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Effect to cycle through the roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={Ai}
          className={styles.hero}
          alt="Profile picture of Kamsani Gowtham Sai"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Gowtham Sai
          <br />
          Kamsani
        </h1>
        <h2>{roles[currentRoleIndex]}</h2>
        <span>
          <a href="https://www.linkedin.com/in/gowtham-sai-kamsani-8bba2821b" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/2000032059" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://x.com/KGowtham9999/" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
        I'm a freelancer developer and AI enthusiast with a degree in Computer Science and Engineering(AI),CGPA 8.87, specializing in React web apps. I am actively seeking job opportunities where I can contribute my skills in building innovative and scalable solutions.
        </p>
        <a href={GouthamResume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
