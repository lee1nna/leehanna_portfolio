import { useEffect, useState } from "react";
import styles from "./ContentPopupWrap.module.css";
import ProjectPopup from "./ProjectPopup";
import { type } from "@testing-library/user-event/dist/type";

const PROJECTS = [
  {
    id: 0,
    title: "CCTV 관제 페이지",
  },
  {
    id: 1,
    title: "어드민 스타터 템플릿",
  },
  {
    id: 2,
    title: "공통컴포넌트 및 가이드 페이지",
  },
  {
    id: 3,
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

const introduceText = '안녕하세요.경험을 통해 얻어진 지식의 가치를 아는 개발자 이한나입니다. 사용자 경험을 중심으로 하는 개발자로서 단순히 디자인을 구현하는 것 이상의 역할을 수행하고자 노력합니다.'

const ContentPopupWrap = (props) => {
  const [selectedProject, setSelectedProject] = useState("");
  const [introText, setIntroText] = useState("")
  const [count, setCount] = useState(0)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      let stop = false
      setIntroText((prevIntroText) => {
        let resultText

        if(!stop) {
          resultText = prevIntroText ? prevIntroText + introduceText[count] : introduceText[0]
          setCount(count+1)
        }
        
        if(count >= introduceText.length) {
          setIntroText(prevIntroText)
          stop = true
        }

        return resultText
      })
    }, 50)

    return () => {
      clearInterval(typingInterval)
    }
  })

  const getContentByCategory = (category) => {
    // project 카테고리
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
    } else if (category === "aboutMe") {
      return (
        <div className={styles["project-content"]}>
          <div className={styles["project-content__title"]}>📍 개발자 모험가</div>
          <div style={{ margin: "10px 0" }}>
           
          </div>
          <div className={styles['intro-text']}>
            {introText}
          </div>
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
        <ProjectPopup
          projectId={selectedProject}
          close={setSelectedProject}
        ></ProjectPopup>
      )}
    </div>
  );
};

export default ContentPopupWrap;
