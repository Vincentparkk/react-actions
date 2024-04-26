import BackButton from "./Back_button";
import styles from "./Deduction_apply3.module.scss";
import { Link } from "react-router-dom";

export default function Deduction_apply3() {
  return (
    <>
      <div className={styles.top}>
        <BackButton />
        <h1 className={styles.title}>의료공제신청</h1>
      </div>

      <div className={styles.center}>
        <h1 className={styles.msg}>신청이 완료되었습니다.</h1>
      </div>
      <article>
        <footer>
          <Link to="/deduction_home">
            <button>
              <p>닫기</p>
            </button>
          </Link>
        </footer>
      </article>
    </>
  );
}
