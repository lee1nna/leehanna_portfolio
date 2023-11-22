import { useState } from "react";
import styles from "./ContentPopupWrap.module.css";
import ProjectPopup from "./ProjectPopup";

const PROJECTS = [
  {
    id: 1,
    title: "CCTV 관제 페이지",
  },
  {
    id: 2,
    title: "어드민 스타터 템플릿",
  },
  {
    id: 3,
    title: "공통컴포넌트 및 가이드 페이지",
  },
  {
    id: 1,
    title: "설문 관리 어드민 및 온라인 설문 서비스",
  },
  {
    id: 4,
    title: "뮤직클라우드",
  },
  {
    id: 5,
    title: "공무원연금공단 신원인증 모바일 플랫폼",
  },
  {
    id: 6,
    title: "소상공인을 위한 간편 키오스크 설치 서비스",
  },
];

const ContentPopupWrap = (props) => {
  const [selectedProject, setSelectedProject] = useState("");

  const getContentByCategory = (category) => {
    // skills 카테고리
    if (category === "project") {
      return (
        <div className={styles["project-content"]}>
          <div className={styles["project-content__title"]}>📍 커리어</div>
          <div style={{ margin: "10px 0" }}>
            <img
              src={`${process.env.PUBLIC_URL}/weeds.png`}
              className={styles["company-logo"]}
              alt=""
            />
            <span style={{ marginLeft: "14px" }}>
              위즈커뮤니케이션즈 (2021.11 ~ 재직중)
            </span>
          </div>

          <div className={styles["project-content__title"]}>
            📍 수행한 프로젝트
          </div>
          <ul className={styles["project-content__ul"]}>
            {PROJECTS.map((project, idx) => {
              return (
                <li
                  key={idx}
                  className={styles["project-content__li"]}
                  onClick={() => {
                    setSelectedProject(project.id);
                  }}
                >
                  <img
                    className={styles.arrow}
                    src={`${process.env.PUBLIC_URL}/arrow.png`}
                    alt=""
                  />
                  {project.title}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className={styles["project-bg-wrap"]}>
      <div
        className={styles["project-bg"]}
        onClick={() => {
          props.setContentPopupOn(false);
        }}
      ></div>
      <div className={`${styles["project-wrapper"]}`}>
        <div className={styles["project-box"]}>
          <div className={styles["project-img"]}>
            <img src={`${process.env.PUBLIC_URL}/my-npc2.png`} alt="" />
            <div className={styles.name}>
              <span>FE 이한나</span>
            </div>
          </div>
          {getContentByCategory(props.category)}
        </div>

        {/* 이전 버튼 */}
        <div
          className={styles["prev-btn"]}
          onClick={() => {
            props.setContentPopupOn(false);
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/pixel-arrow.png`} alt="" />
          <div>이전</div>
        </div>
      </div>

      {selectedProject !== "" && (
        <ProjectPopup projectId={selectedProject}></ProjectPopup>
      )}
    </div>
  );
};

export default ContentPopupWrap;
