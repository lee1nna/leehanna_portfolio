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
    title: "중소기업 밀집지역 현황 모니터링 시스템",
  },
  {
    id: 2,
    title: "에코맵",
  },
  {
    id: 3,
    title: "어드민 스타터 + 공통 컴포넌트 및 가이드 페이지",
  },
  {
    id: 4,
    title: "설문 관리 어드민 및 온라인 설문 서비스",
  },
  {
    id: 5,
    title: "뮤직클라우드",
  },
  {
    id: 6,
    title: "공무원연금공단 신원인증 모바일 플랫폼",
  },
  {
    id: 7,
    title: "소상공인을 위한 간편 키오스크 설치 서비스",
  },
];

const introduceText =
  "안녕하세요.경험을 통해 얻어진 지식의 가치를 아는 개발자 이한나입니다. \n 사용자 경험을 중심으로 하는 개발자로서 단순히 디자인을 구현하는 것 \n 이상의 역할을 수행하고자 노력합니다.";

// const companyName = 
const companyDescription = ""

const ContentPopupWrap = (props) => {
  const [selectedProject, setSelectedProject] = useState("");
  const [introText, setIntroText] = useState("");
  const [companyText, setCompanyText] = useState("");
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(50);
  const [aboutMeContent, setAboutMeContent] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      let stop = false;
      setIntroText((prevIntroText) => {
        let resultText;

        if (!stop) {
          resultText = prevIntroText
            ? prevIntroText + introduceText[count]
            : introduceText[0];
          setCount(count + 1);
        }

        if (count >= introduceText.length) {
          setIntroText(prevIntroText);
          stop = true;
          clearInterval(typingInterval);
          setAboutMeContent(true);
        }

        return resultText;
      });
    }, time);

    return () => {
      clearInterval(typingInterval);
    };
  }, [introText]);

  const handlerClickContent = () => {
    setTime(20);
  };

  const getContentByCategory = (category) => {
    // project 카테고리
    if (category === "project") {
      return (
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
      );
    } else if (category === "career") {
      return (
        <div className={styles["project-content"]}>
          <div className={styles["project-content__title"]}>📍 커리어</div>
          <div style={{ margin: "10px 0" }}>
            <img
              src={`${process.env.PUBLIC_URL}/weeds.png`}
              className={styles["company-logo"]}
              alt=""
            />
            <span style={{ marginLeft: "14px", fontSize: "20px" }}>
              위즈커뮤니케이션즈 (2021.11 ~ 재직중)
            </span>
          </div>
          <div className={styles["company-desc"]}>
            다양한 고객사와 협업하며 기획부터 개발 및 유지보수까지 <br />
            <span className="ft_red">
              IT 솔루션 공급에 필요한 모든 영역에서의 기술력을 제공하는 기업
            </span>입니다. <br />
            <br />
            <span className="ft_red">웹 프론트엔드 개발을 담당</span>하고
            있으며, <br /> 주로 Nuxt와 Vue 프레임워크를 사용해 개발을 진행해
            왔습니다. <br />
            현재는 기술 스택을 변경중에 있어 사내에서 사용하는 공통 컴포넌트와
            <br /> 가이드 페이지를 <span className="ft_red">Next로 재개발 작업을 진행</span>{" "}
            했습니다. <br />
            고객사와 직접 소통하여 요구사항을 도출하거나, <br /> 신입 개발자의
            <span className="ft_red"> 사수 역할</span>도 함께 담당하고 있습니다.
          </div>
        </div>
      );
    } else if (category === "aboutMe") {
      return (
        <div
          className={styles["project-content"]}
          onClick={handlerClickContent}
        >
          <div className={styles["project-content__title"]}>📍 About Me</div>
          <div style={{ margin: "10px 0" }}></div>
          <div className={styles["intro-text"]}>
            {introText?.split('\n').map(text => (
              <div>{text}</div>
            ))}
          </div>
          {aboutMeContent && (
            <div className={styles["me-info"]}>
              <div>
                <img
                  className={styles["pixel-icon"]}
                  src={`${process.env.PUBLIC_URL}/pixel_cake.jpeg`}
                  alt=""
                />
                1999.02.09
              </div>
              <a href="mailto:dlgkssk0209@gmail.com">
                <img
                  className={styles["pixel-icon"]}
                  src={`${process.env.PUBLIC_URL}/pixel_email.png`}
                  alt=""
                />
                dlgkssk0209@gmail.com
              </a>
              <a href="tel:010-6789-5305">
                <img
                  className={styles["pixel-icon"]}
                  src={`${process.env.PUBLIC_URL}/pixel_call.png`}
                  alt=""
                />
                010-6789-5305
              </a>
              <a href="https://github.com/lee1nna" target="_blank">
                <img
                  className={styles["pixel-icon"]}
                  src={`${process.env.PUBLIC_URL}/pixel_github.png`}
                  alt=""
                />
                https://github.com/lee1nna
              </a>
            </div>
          )}
        </div>
      );
    } else if (category === "skills") {
      return (
        <div
          className={styles["project-content"]}
          style={{ padding: "15px 7px 0 7px" }}
        >
          <div className={styles["project-content__title"]}>📍 Skills</div>
          <div className="flex mg-top-10">
            <div className={styles["skills-wrap"]}>
              <div className={styles["skill-header"]}>
                <div className={styles["skill-book"]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/book_icon.png`}
                    width="40"
                    alt=""
                  />
                </div>
                <div className="mg-left-15">Front-end</div>
              </div>
              <div className={styles["skill-body"]}>
                <div className={styles["skill"]}>
                  <img src={`${process.env.PUBLIC_URL}/html_icon.png`} alt="" />
                  <div>HTML</div>
                </div>
                <div className={styles["skill"]}>
                  <img src={`${process.env.PUBLIC_URL}/css_icon.png`} alt="" />
                  <div>CSS</div>
                </div>
                <div className={styles["skill"]}>
                  <img src={`${process.env.PUBLIC_URL}/js_icon.png`} alt="" />
                  <div>Javascript</div>
                </div>
                <div className={styles["skill"]}>
                  <img src={`${process.env.PUBLIC_URL}/vue_icon.png`} alt="" />
                  <div>Vue</div>
                </div>
                <div className={styles["skill"]}>
                  <img src={`${process.env.PUBLIC_URL}/nuxt_icon.png`} alt="" />
                  <div>Nuxt</div>
                </div>
                <div className={styles["skill"]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/react_icon.png`}
                    alt=""
                  />
                  <div>React</div>
                </div>
                <div className={styles["skill"]}>
                  <img src={`${process.env.PUBLIC_URL}/next_icon.png`} alt="" />
                  <div>Next</div>
                </div>
              </div>
            </div>
            <div className={styles["skills-wrap"]}>
              <div className={styles["skill-header"]}>
                <div className={styles["skill-book"]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/book_icon.png`}
                    width="40"
                    alt=""
                  />
                </div>
                <div className="mg-left-15">Version Control</div>
              </div>
              <div className={styles["skill-body"]}>
                <div className={styles["skill"]}>
                  <img src={`${process.env.PUBLIC_URL}/git_icon.png`} alt="" />
                  <div>Git</div>
                </div>
                <div className={styles["skill"]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/github_icon.png`}
                    alt=""
                  />
                  <div>Github</div>
                </div>
              </div>
            </div>
            <div className={styles["skills-wrap"]}>
              <div className={styles["skill-header"]}>
                {" "}
                <div className={styles["skill-book"]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/book_icon.png`}
                    width="40"
                    alt=""
                  />
                </div>
                <div className="mg-left-15">Etc</div>
              </div>
              <div className={styles["skill-body"]}>
                <div className={styles["skill"]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/firebase_icon.png`}
                    alt=""
                  />
                  <div>Firebase</div>
                </div>
                <div className={styles["skill"]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/strapi_icon.png`}
                    alt=""
                  />
                  <div>Strapi</div>
                </div>
                <div className={styles["skill"]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/react-native_icon.png`}
                    alt=""
                  />
                  <div>React-native</div>
                </div>
              </div>
            </div>
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
