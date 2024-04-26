import styles from "./Deduction_mypage_modify.module.scss";

export default function Deduction_mypage_modify() {
  return (
    <>
      <div className={styles.top}>
        <p className={styles.title}>개인정보수정</p>
      </div>

      <p className={styles.option}>이름</p>
      <p className={styles.option}>학과</p>
      <p className={styles.option}>과정</p>
    </>
  );
}
