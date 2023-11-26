import styles from "./ProjectPopup.module.css";

const ProjectPopup = (props) => {
  const projects = [
    {
      title: "CCTV 관제 페이지",
      period: "2021.12 ~ 2022.01",
      skills: "Nuxt, Typescript, Axios, HTML5, CSS3",
      shortDesc: "최대 9개의 CCTV를 실시간으로 관제하는 웹페이지",
      src: "cctv_project.png",
      detailDesc:
        "• CCTV 장비 관리 및 설치된 CCTV를 관제하는 웹페이지 개발 <br/> • Hls.js를 사용해 최대 9개의 CCTV 라이브 스트리밍 제공 <br/> • Firebase 호스팅을 사용해 웹 페이지 배포",
    },
    {
      title: "중소기업 밀집지역 현황 모니터링 시스템",
      period: "2023.03 ~ 진행중",
      skills: "Nuxt, Javascript, Axios, HTML5, CSS3",
      shortDesc:
        "중소기업 밀집지역 현황 및 지역경제동향 등 정보 시스템을 제공하는 관리자 페이지",
      src: "goverment_project1.png",
      detailDesc:
        "• 온라인 설문 조사 기능 개발 <br/> • 설문 응답 내역에 대한 분기별 종합 분석, 응답률 등 통계 기능 제공 <br/> • 지역경기동향 통계 기능 개발 <br/> • 각 통계별 이미지, pdf 다운로드 제공",
    },
    {
      title: "에코맵",
      period: "2023.09 ~ 2023.11",
      skills: "React-Native, Typescript, Axios, HTML5, CSS3",
      shortDesc: "텀블러 할인 이벤트를 제공하는 제휴 카페 지도 어플리케이션",
      src: "eco_project.png",
      detailDesc:
        "• 주변 카페 지도 검색 기능 개선 <br/> • 기존 UI/UX 개선 및 이슈사항 수정<br/> • 빠른 어플리케이션 배포를 위해 Codepush 도입",
    },
    {
      title: "어드민 스타터 + 사내 공통 컴포넌트",
      period: "2022.01 ~ 진행중",
      skills: "Nuxt, Typescript, Axios, HTML5, CSS3",
      shortDesc: "최대 9개의 CCTV를 실시간으로 관제하는 웹페이지",
      src: "guide_project.png",
      detailDesc:
        "• 어드민 페이지의 빠른 개발을 위해 주요 기능 모듈화 <br/> • 어드민 페이지 내에서 사용되는 공통 컴포넌트 개발 <br/> • 기존 스타터와 공통 컴포넌트 리라이팅 진행 <br/> • 회사 내부 기술 스택 변경으로 인해 Next 점진적 도입 <br/>",
    },
    {
      title: "병원 설문 관리 어드민 및 온라인 설문 서비스",
      period: "2023.01 ~ 2023.05",
      skills: "Nuxt, Javascript, Axios, HTML5, CSS3",
      shortDesc: "병원 업무 효율화를 위해 비대면으로 문진을 진행하는 서비스",
      src: "novogen_project.png",
      detailDesc:
        "• 메인 개발자로 참여하여 프로젝트 구조 설계, 공통 컴포넌트 개발 및 가이드 페이지 제작 <br/> • 데이터 탐색의 어려움 해소를 위해 테이블 열 편집 기능을 넣어 사용자 경험 개선 <br/> • 기존 상태관리 솔루션 Vuex의 복잡한 API 사용법 개선과 모듈식 설계를 위해 Pinia 도입",
    },
    {
      title: "뮤직클라우드",
      period: "2022.09 ~ 2023.02",
      skills: "Nuxt, Javascript, Strapi, Axios, HTML5, CSS3",
      shortDesc: "연주자 프로필과 포트폴리오를 관리 및 공유해주는 서비스",
      src: "music_project1.png",
      detailDesc:
        "• Headerless CMS strapi를 사용하여 백엔드를 대체 하면서 DB 설계 및 엔티티 도출 참여 <br/> • 기획 및 요구사항에 대한 누락 사항을 외부 기획자와 직접 적극적으로 협의해 개선 및 보완 <br/>• 카카오톡 공유 sdk를 사용한 명함 공유 기능 개발",
    },
    {
      title: "공무원 연금공단 신원인증 모바일 플랫폼",
      period: "2022.04 ~ 2023.11",
      skills: "Nuxt, Typescript, Axios, HTML5, CSS3",
      shortDesc: "각종 신원증명 서비스 증명서로 사용되는 공무원 연금증 어플리케이션",
      src: "did_project1.png",
      detailDesc:
        "• 파일 빌드 후 안드로이드 스튜디오에 포팅해 apk로 변환 <br/> • 웹 뷰 화면 개발 및 이슈 수정을 위해 Chrome inspect를 사용해 디버깅",
    },
    {
      title: "소상공인을 위한 간편 키오스크 설치 서비스",
      period: "2022.02 ~ 2022.03",
      skills: "Nuxt, Typescript, Firebase, Axios, HTML5, CSS3",
      shortDesc: "소상공인의 가게 홍보를 위한 간편 키오스크 설치 서비스",
      src: "kiosk_project.png",
      detailDesc:
        "• Firebase를 연동해 Firebase Storage에 저장된 컨텐츠 이미지 및 영상 조회 기능 개발 <br/> • Timestamp를 사용해 만료 시간이 있는 웹 링크를 개발",
    },
  ];

  const selectedProject = (id) => {
    return (
      <div className={styles["project"]}>
        <div className={styles["project-header"]}>
          <div className={styles["header-shadow"]}></div>
          <div className={styles["project-header__left"]}>
            <div className="flex align-center mg-top-10 bold">
              <div className={styles["circle"]}></div>
              {projects[id].title}
            </div>
            <div className="mg-top-20">🗓 {projects[id].period}</div>
            <div className="mg-top-10">📚 {projects[id].skills}</div>
            <div className="mg-top-10">📍 {projects[id].shortDesc}</div>
          </div>

          <div className={styles["project-header__right"]}>
            <img src={`${process.env.PUBLIC_URL}/my-npc2.png`} alt="" />
          </div>
        </div>
        <div className={styles["project-body"]}>
          <img
            className={styles["project-img"]}
            src={`${process.env.PUBLIC_URL}/${projects[id].src}`}
            alt=""
          />
          <div className={styles["project-desc"]}>
            {projects[id].detailDesc.split("<br/>").map((desc) => (
              <div>{desc}</div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles["project-popup-wrap"]}>
      <div
        className={styles["project-popup-bg"]}
        onClick={() => props.close("")}
      >
        {/* <img className={styles["left-arrow"]} src={`${process.env.PUBLIC_URL}/green-arrow.png`} alt="" /> */}
        {/* <img className={styles["right-arrow"]} src={`${process.env.PUBLIC_URL}/green-arrow.png`} alt="" /> */}
      </div>
      <div className={styles["project-popup"]}>
        <div
          className={styles["project-cancle-btn"]}
          onClick={() => props.close("")}
        >
          X
        </div>
        {selectedProject(props.projectId)}
        {/* <div className={styles["project"]}>
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
        </div> */}
      </div>
    </div>
  );
};

export default ProjectPopup;
