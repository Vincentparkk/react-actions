import styles from "./Health_home.module.scss";
import image1 from "./button_1_green.png";
import image2 from "./button_2.png";
import image3 from "./button_3.png";
import timetable from "./timetable.png";
import BackButton from "./Back_button";
import { Link } from "react-router-dom";

function Health_1() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.top}>
          <BackButton destination="/card" />
          <h1 className={styles.title}>보건실 운영 시간</h1>
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonArea}>
            <Link to="/health/health_1">
              <button className={styles.butt}>
                <img
                  src={image1}
                  className={styles.menuimg}
                  style={{ width: "30px", height: "38px" }}
                />
                <h3 className={styles.buttP}>
                  보건실
                  <br />
                  운영 시간
                </h3>
              </button>
            </Link>
          </div>
          <div className={styles.buttonArea}>
            <Link to="/health/health_2">
              <button className={styles.butt}>
                <img
                  src={image2}
                  className={styles.menuimg}
                  style={{ width: "35px", height: "35px" }}
                />
                <h3 className={styles.buttP}>
                  보건실
                  <br />
                  구비 품목
                </h3>
              </button>
            </Link>
          </div>
          <div className={styles.buttonArea}>
            <Link to="/health/health_3">
              <button className={styles.butt}>
                <img
                  src={image3}
                  className={styles.menuimg}
                  style={{ width: "35px", height: "35px" }}
                />
                <h3 className={styles.buttP}>기타</h3>
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.time}>
          <img style={{ width: "90%", height: "80%" }} src={timetable} />
        </div>
      </div>
    </>
  );
}

export default Health_1;
