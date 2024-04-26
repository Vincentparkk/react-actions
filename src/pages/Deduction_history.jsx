import BackButton from "./Back_button";
import styles from "./Deduction_history.module.scss";

export default function Deduction_history() {
  return (
    <>
      <div className={styles.top}>
        <BackButton />
        <h1 className={styles.title}>의료공제신청현황/기록</h1>
      </div>

      <div className={styles.container}>
        <div>
          <label>번호</label>
        </div>
        <div>
          <label>제목</label>
        </div>
        <div>
          <label>상태</label>
        </div>
        <div>
          <label>작성일</label>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
