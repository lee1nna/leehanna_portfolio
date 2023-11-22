import styles from "./ProjectPopup.module.css";

const ProjectPopup = () => {
  return (
    <div className={styles["project-popup-wrap"]}>
      <div className={styles["project-popup-bg"]}>
        <img className={styles["left-arrow"]} src={`${process.env.PUBLIC_URL}/green-arrow.png`} alt="" />
        <img className={styles["right-arrow"]} src={`${process.env.PUBLIC_URL}/green-arrow.png`} alt="" />
      </div>
      <div className={styles["project-popup"]}>
        <div className={styles["project-cancle-btn"]}>X</div>
        <div className={styles["project"]}>
          <div className={styles["project-header"]}>
            <div className={styles["project-header__left"]}>
              <div className="flex align-center mg-top-10 bold">
                <div className={styles["circle"]}></div>
                CCTV 관제 페이지
              </div>
              <div className="mg-top-20">🗓 2021.12 ~ 2022.01</div>
              <div className="mg-top-10">
                📚 Nuxt, Typescript, Axios, HTML5, CSS3
              </div>
              <div className="mg-top-10">
                📍 최대 9개의 CCTV를 실시간으로 관제하는 웹페이지
              </div>
            </div>

            <div className={styles["project-header__right"]}>
              <img src={`${process.env.PUBLIC_URL}/my-npc2.png`} alt="" />
            </div>
          </div>
          <div className={styles["project-body"]}>
            <img
              className={styles["project-img"]}
              src={`${process.env.PUBLIC_URL}/cctv_project.png`}
              alt=""
            />
            <div className={styles["project-desc"]}>
            • CCTV 장비 관리 및 설치된 CCTV를 관제하는 웹페이지 개발 <br />
            • Hls.js를 사용해 최대 9개의 CCTV 라이브 스트리밍 제공 <br />
            • Firebase 호스팅을 사용해 웹 페이지 배포
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
