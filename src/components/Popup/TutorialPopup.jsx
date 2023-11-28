import styles from "./TutorialPopup.module.css";
// import npc from "../../assets/remove-bg-sd-image.png";
import ContentPopupWrap from "./ContentPopupWrap";
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
        <ContentPopupWrap
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
          <img src={`${process.env.PUBLIC_URL}/remove-bg-sd-image.png`} alt="" />
          <div className={styles["npc-name"]}>FE 개발자 이한나</div>
          보고싶은 카테고리를 선택해주세요.
          <ul className={styles.category}>
            <li onClick={() => {selectContentCategory("aboutMe")}}>About Me</li>
            <li onClick={() => {selectContentCategory("career")}}>Career</li>
            <li onClick={() => {selectContentCategory("project")}}>Project</li>
            <li onClick={() => {selectContentCategory("skills")}}>Skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorialPopup;
