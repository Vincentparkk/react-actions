import styles from "./Health_home.module.scss";
import image1 from "./button_1_green.png";
import image2 from "./button_2.png";
import image3 from "./button_3.png";
import BackButton from "./Back_button";
import { Link } from "react-router-dom";

function Health_2() {
  const dummy = [
    {
      id: 1,
      option: 1,
      medicine: "타이레놀",
      Symptom: "두통",
      isDone: false,
    },
    {
      id: 2,
      option: 1,
      medicine: "밴드",
      Symptom: "타박상",
      isDone: false,
    },
    {
      id: 3,
      option: 1,
      medicine: "파스",
      Symptom: "근육통",
      isDone: false,
    },
    {
      id: 4,
      option: 1,
      medicine: "라니티딘",
      Symptom: "복통",
      isDone: false,
    },
    {
      id: 5,
      option: 1,
      medicine: "안마의자",
      Symptom: "기타",
      isDone: false,
    },
    {
      id: 6,
      option: 1,
      medicine: "인바디 측정",
      Symptom: "기타",
      isDone: false,
    },
  ];

  return (
    <>
      <div className={styles.page}>
        <div className={styles.top}>
          <BackButton destination="/card" />
          <h1 className={styles.title}>보건실 구비 품목</h1>
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
        <table className={styles.table}>
          <tbody className={styles.tablebody}>
            {dummy.map((detail) => (
              <tr key={detail.id} className={styles.list_day}>
                <td>{detail.Symptom}</td>
                <td>{detail.medicine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Health_2;
