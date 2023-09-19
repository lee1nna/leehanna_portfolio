import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import DetailProject from "../Project/DetailProject";
import TutorialPopup from "../Popup/TutorialPopup";
import ContentPopup from "../Popup/ContentPopup";

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

const Home = () => {
  const [tutorialPopupOn, setTutorialPopupOn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('')

  const [selectedNpc, setSelectedNpc] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoverNpc, setHoverNpc] = useState(false);
  const npcRef = useRef();

  const [selectedThing, setSelectedThing] = useState(null);

  const [hoverProjectIcon, setHoverProjectIcon] = useState(false);
  const [hoverSkillIcon, setHoverSkillIcon] = useState(false);
  const [hoverWorkIcon, setHoverWorkIcon] = useState(false);
  const [hoverContactIcon, setHoverContactIcon] = useState(false);

  return (
    <div id="project" className={styles.project}>
    {tutorialPopupOn && <TutorialPopup setTutorialPopupOn={setTutorialPopupOn} setSelectedCategory={setSelectedCategory}></TutorialPopup>}
      <div className={styles.circle}></div>
      <div className={styles.text1}>LEEHANNA</div>
      <div className={styles.text2}>PORTFOLIO</div>
      {/* npc 영역 */}
      {
        <div
          ref={npcRef}
          className={`${
            selectedThing === "npc" ? styles["disappear-npc"] : ""
          } ${styles["npc-wrapper"]}`}
        >
          {hoverNpc && (
            <img
              className={styles.bulb}
              src="https://lee1nna.github.io/leehanna_portfolio/bulb.png"
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
                setTutorialPopupOn(true)
            }}
            src="https://lee1nna.github.io/leehanna_portfolio/my-npc2.png"
            alt=""
          />
          <div className={styles.name}>
            <span>FE 이한나</span>
          </div>
        </div>
      }

      {/* <div className={styles.icons}>
        <img
          onClick={() => {
            setSelectedThing("project");
          }}
          className={styles["project-icon"]}
          src="https://lee1nna.github.io/leehanna_portfolio/project-removebg-preview.png"
          alt=""
        />
        <img
          onClick={() => {
            setSelectedThing("skill");
          }}
          className={styles["skill-icon"]}
          src="https://lee1nna.github.io/leehanna_portfolio/skill-removebg-preview.png"
          alt=""
        />
        <img
          onClick={() => {
            setSelectedThing("work");
          }}
          className={styles["work-icon"]}
          src="https://lee1nna.github.io/leehanna_portfolio/work-removebg-preview.png"
          alt=""
        />
        <img
          onClick={() => {
            setSelectedThing("contact");
          }}
          className={styles["contact-icon"]}
          src="https://lee1nna.github.io/leehanna_portfolio/contact-removebg-preview.png"
          alt=""
        />
      </div> */}

      {/* npc 선택 시 */}
      {/* {selectedCategory === "aboutMe" && (
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
            {selectedProject === null && (
              <div className={styles["project-content"]}>
                <div className={styles["project-content__title"]}>
                  👩🏻‍💻 About Me
                </div>
                <div className="flex-center flex-column mg-top-20">
                  <div className="text-center">경험을 통해 얻어진 지식의 가치를 아는 <br/>
                   프론트엔드 개발자 이한나 입니다.</div>
                  <img
                    className={styles["aboutme-profile"]}
                    src="profile.jpg"
                    alt=""
                  />
                  <div className="text-left">
                    경험을 통해 얻어진 지식의 가치를 아는 <br />
                    프론트엔드 개발자 이한나 입니다. 사용자 경험을 최우선으로
                    생각하려고 노력합니다.
                    <br />
                  </div>
                </div>
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
                src="https://lee1nna.github.io/leehanna_portfolio/pixel-arrow.png"
                alt=""
              />
              <div>이전</div>
            </div>
          )}
        </div>
      )} */}

      {/* project 선택 시 */}
      {/* {selectedCategory === "project" && (
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
                          src="https://lee1nna.github.io/leehanna_portfolio/arrow.png"
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
                src="https://lee1nna.github.io/leehanna_portfolio/pixel-arrow.png"
                alt=""
              />
              <div>이전</div>
            </div>
          )}
        </div>
      )} */}

      {/* work 선택 시 */}
      {/* {selectedThing === "work" && (
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
            {selectedProject === null && (
              <div className={styles["project-content"]}>
                <div className={styles["project-content__title"]}>
                  💌 Work Experience
                </div>
                <div className="flex-start flex-column mg-top-20">
                  <div className={`${styles["contact-title"]} text-left`}>
                    위즈커뮤니케이션즈
                  </div>
                  <div className="text-left fs-20 mg-top-10">
                    {" "}
                    프론트앤드 개발자 (2021.11 ~ 재직중)
                  </div>
                </div>
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
                src="https://lee1nna.github.io/leehanna_portfolio/pixel-arrow.png"
                alt=""
              />
              <div>이전</div>
            </div>
          )}
        </div>
      )} */}

      {/* contact 선택 시 */}
      {/* {selectedThing === "contact" && (
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
            {selectedProject === null && (
              <div className={styles["project-content"]}>
                <div className={styles["project-content__title"]}>
                  💌 Contact
                </div>
                <div
                  className="flex-center flex-column mg-top-20"
                  style={{ height: "calc(100% - 70px)" }}
                >
                  <div className={`${styles["contact-title"]} text-left`}>
                    Email
                  </div>
                  <div className="text-left fs-20">dlgkssk0209@gmail.com</div>
                  <div
                    className={`${styles["contact-title"]} text-left mg-top-20`}
                  >
                    Phone
                  </div>
                  <div className="text-left fs-20">010-6789-5305</div>
                  <div
                    className={`${styles["contact-title"]} text-left mg-top-20`}
                  >
                    Github
                  </div>
                  <div className="text-left fs-20">
                    https://github.com/lee1nna
                  </div>
                </div>
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
                src="https://lee1nna.github.io/leehanna_portfolio/pixel-arrow.png"
                alt=""
              />
              <div>이전</div>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Home;
