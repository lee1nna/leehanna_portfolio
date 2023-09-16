import styles from "./DetailProject.module.css";

const PROJECT_INFO = {
  title: "CCTV 관제 페이지",
  period: "2021.12 ~ 2022.01",
  skills: "Nuxt, Typescript, Axios, HTML5, CSS3",
};

const DetailProject = (props) => {
  return (
    <div>
      {props.projectId === 1 && (
        <div>
          <img className={styles["project-img"]} src="/p_cctv.png" alt="" />
          <div className={styles["project-info"]}>
            <div className={styles["project-title"]}>
              CCTV 관제 페이지
              <span className={styles["project-period"]}>
                (2021.12 ~ 2022.01)
              </span>
            </div>
            <div className={styles["skill-tags"]}>
              <div className={styles["skill-tag"]}>Typescript</div>
              <div className={styles["skill-tag"]}>Axios</div>
              <div className={styles["skill-tag"]}>HTML5</div>
              <div className={styles["skill-tag"]}>CSS3</div>
            </div>
            <ul className={styles["project-ul"]}>
              웹 스트리밍 기술 문제 해결과 백엔드 개발자와 협업
              <li className={styles["project-li"]}>
                기존 요구사항인 RTSP 스트리밍의 브라우저 지원의 제한과 보안
                이슈를 발견
              </li>
              <li className={styles["project-li"]}>
                브라우저 환경에서 HTTP 기반으로 동작하는 HLS 기술의 빠른
                플레이백과 높은 확장성과 유연성 특징을 보고 기술 제시 후 결정{" "}
              </li>
            </ul>
            <ul className={styles["project-ul"]}>
              Vue 라이프 사이클을 활용한 스트리밍의 성능 저하 이슈 최적화 경험
              <li className={styles["project-li"]}>
                Hls 스트리밍의 지속적인 응답 특성으로 페이지 간 이동에도
                스트리밍이 계속 활성화되어 성능 저하 문제 직면
              </li>
              <li className={styles["project-li"]}>
                Vue의 라이프 사이클인 unMounted를 활용해 페이지를 벗어날 경우
                자동으로 Hls 스트리밍을 중단시키는 로직을 추가하여 문제 해결
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProject;
