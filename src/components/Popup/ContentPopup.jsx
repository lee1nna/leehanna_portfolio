import styles from "./ContentPopup.module.css";

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

const ContentPopup = (props) => {
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
            <img
              src="https://lee1nna.github.io/leehanna_portfolio/my-npc2.png"
              alt=""
            />
            <div className={styles.name}>
              <span>FE 이한나</span>
            </div>
          </div>
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
                        //   setSelectedProject(project.id);
                        }}
                      >
                        <img
                          className={styles.arrow}
                          src="https://lee1nna.github.io/leehanna_portfolio/arrow.png"
                          alt=""
                        />
                        {project.title}
                      </li>
                    );
                  })}
                </ul>
          </div>
        </div>


        {/* 이전 버튼 */}
        <div
          className={styles["prev-btn"]}
          onClick={() => {
            props.setContentPopupOn(false);
          }}
        >
          <img
            src="https://lee1nna.github.io/leehanna_portfolio/pixel-arrow.png"
            alt=""
          />
          <div>이전</div>
        </div>
      </div>
    </div>
  );
};

export default ContentPopup;
