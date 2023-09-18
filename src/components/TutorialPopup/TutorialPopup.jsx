import styles from './TutorialPopup.module.css'

const TutorialPopup = (props) => {
    return (
        <div className="tutorial-popup">
            <div className={styles["popup-bg"]} onClick={() => {props.setTutorialPopupOn(false)}}></div>
            <div className={styles["tutorial-wrap"]}>
                <div className={styles["tutorial-box"]}>
                    <img src="reality-npc2.png" alt="" />
                    <div className={styles['npc-name']}>
                        FE 이한나
                    </div>
                    보고싶은 카테고리를 선택해주세요.
                    <ul>
                        <li>About Me</li>
                        <li>Skills</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default TutorialPopup