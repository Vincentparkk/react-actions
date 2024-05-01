import styles from "./Health_home.module.scss";
import image1 from "./button_1_green.png";
import image2 from "./button_2.png";
import image3 from "./button_3.png";
import BackButton from "./Back_button";
import { Link } from "react-router-dom";

function Health_3() {
  const dummy = [
    {
      id: 7,
      option: 2,
      medicine: "(054)279-2620",
      Symptom: "보건 선생님 연락처",
      isDone: false,
    },
    {
      id: 8,
      option: 2,
      medicine: "(054)279-8711",
      Symptom: "안전팀 연락처",
      isDone: false,
    },
  ];
  return (
    <>
      <div className={styles.page}>
        <div className={styles.top}>
          <BackButton destination="/card" />
          <h1 className={styles.title}>보건실 기타</h1>
        </div>
        <div className={styles.buttons}>
          <Link to="/health/health_1">
            <button className={styles.butt}>
              <img
                style={{ width: "50px", height: "70px" }}
                src={image1}
                alt="보건실 운영 시간"
                className={styles.menuimg}
              />
              <h3 className={styles.buttP}>
                보건실
                <br />
                운영 시간
              </h3>
            </button>
          </Link>
          <Link to="/health/health_2">
            <button className={styles.butt}>
              <img
                style={{ width: "70px", height: "70px" }}
                src={image2}
                alt="보건실 구비 품목"
                className={styles.menuimg}
              />
              <h3 className={styles.buttP}>
                보건실
                <br />
                구비 품목
              </h3>
            </button>
          </Link>
          <Link to="/health/health_3">
            <button className={styles.butt}>
              <img
                style={{ width: "70px", height: "70px" }}
                src={image3}
                alt="기타"
                className={styles.menuimg}
              />
              <h3 className={styles.buttP}>기타</h3>
            </button>
          </Link>
        </div>
        <table className={styles.table}>
          <tbody>
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

export default Health_3;