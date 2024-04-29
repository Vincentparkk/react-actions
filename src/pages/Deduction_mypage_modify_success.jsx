import BackButton from "./Back_button";
import styles from "./Deduction_mypage_modify_success.module.scss";
import { Link } from "react-router-dom";

export default function Deduction_mypage_modify_success() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.top}>
          <BackButton />
          <h1 className={styles.title}>개인정보수정</h1>
        </div>

        <div className={styles.center}>
          <h1 className={styles.msg}>수정이 완료되었습니다.</h1>
        </div>
        <article>
          <footer>
            <Link to="/deduction_home">
              <button className={styles.butt}>
                <p className={styles.buttP}>닫기</p>
              </button>
            </Link>
          </footer>
        </article>
      </div>
    </>
  );
}
