import styles from "./TutorialPopup.module.css";
import npc from "../../assets/npc3.png";
import ContentPopup from "./ContentPopup";
import { useState } from "react";

const TutorialPopup = (props) => {
  const [contentPopupOn, setContentPopupOn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const selectContentCategory = (category) => {
    setContentPopupOn(true);
    setSelectedCategory(category);
  };

  return (
    <div className={styles["tutorial-popup"]}>
      {contentPopupOn && (
        <ContentPopup
          setContentPopupOn={setContentPopupOn}
          category={selectedCategory}
        />
      )}
      <div
        className={styles["popup-bg"]}
        onClick={() => {
          props.setTutorialPopupOn(false);
        }}
      ></div>
      <div className={styles["tutorial-wrap"]}>
        <div className={styles["tutorial-box"]}>
          <img src={npc} alt="" />
          <div className={styles["npc-name"]}>FE 이한나</div>
          보고싶은 카테고리를 선택해주세요.
          <ul className={styles.category}>
            <li onClick={() => {selectContentCategory("aboutMe")}}>About Me</li>
            <li onClick={() => {selectContentCategory("skills")}}>Skills</li>
            <li onClick={() => {selectContentCategory("project")}}>Project</li>
            <li onClick={() => {selectContentCategory("contact")}}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorialPopup;
