import { useEffect, useRef, useState } from "react";
import styles from "./Project.module.css";
import DetailProject from "./DetailProject";

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

const EXPERIENCES = [
  {
    id: 7,
    title: "툰툰이",
  },
    {
    id: 8,
    title: "잇터뷰",
  },
]

const Project = () => {
  const [selectedNpc, setSelectedNpc] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoverNpc, setHoverNpc] = useState(false);
  const npcRef = useRef();

  return (
    <div id="project" className={styles.project}>
      {
        <div
          ref={npcRef}
          className={`${selectedNpc ? styles["disappear-npc"] : ""} ${
            styles["npc-wrapper"]
          }`}
        >
          {hoverNpc && (
            <img
              className={styles.bulb}
              src={`${process.env.PUBLIC_URL}/bulb.png`}
              alt=""
            />
          )}
          {hoverNpc === false && (
            <div className={styles["click-me__txt"]}>Click Me !!</div>
          )}
          <img
            className={styles.npc}
            onMouseOver={() => {
              setHoverNpc(true);
            }}
            onMouseLeave={() => {
              setHoverNpc(false);
            }}
            onClick={() => {
              setSelectedNpc(true);
              setTimeout(() => {
                npcRef.current.style.display = "none";
              }, 500);
            }}
            src={`${process.env.PUBLIC_URL}/my-npc2.png`}
            alt=""
          />
          <div className={styles.name}>
            <span>FE 이한나</span>
          </div>
        </div>
      }
      {selectedNpc !== null && (
        <div className={`${styles["project-wrapper"]}`}>
          <div className={styles["project-box"]}>
            <div className={styles["project-img"]}>
              <img
                src={`${process.env.PUBLIC_URL}/my-npc2.png`}
                alt=""
              />
              <div className={styles.name}>
                <span>FE 이한나</span>
              </div>
            </div>
            {selectedProject === null && (
              <div className={styles["project-content"]}>
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
            )}
            {selectedProject !== null && (
              <div className={styles["project-content"]}>
                <DetailProject projectId={selectedProject} />
              </div>
            )}
          </div>
          {selectedProject !== null && (
            <div
              className={styles["prev-btn"]}
              onClick={() => {
                setSelectedProject(null);
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/pixel-arrow.png`}
                alt=""
              />
              <div>이전</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Project;
