import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles["header-ul"]}>
        <a href="#home">
          <li className={styles["header-li"]}>Home</li>
        </a>
        <a href="#skills">
          <li className={styles["header-li"]}>Skills</li>
        </a>
        <a href="#career">
          <li className={styles["header-li"]}>Career</li>
        </a>
        <a href="#project">
          <li className={styles["header-li"]}>Project</li>
        </a>
        <a href="#contact">
          <li className={styles["header-li"]}>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
