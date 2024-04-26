import styles from "./Deduction_mypage.module.scss";
import { Link } from "react-router-dom";

export default function Deduction_mypage() {
  return (
    <>
      <div className={styles.top}>
        <p className={styles.title}>마이페이지</p>
      </div>
      <div className={styles.bodyOne}>
        <div className={styles.profileImage}>
          <p>이미지</p>
        </div>
        <p className={styles.user}>사용자</p>
        <p className={styles.email}>admin@postech.ac.kr</p>
      </div>

      <p className={styles.option}>
        <Link to="/deduction_home/deduction_mypage_modify">
          <button>
            <p>개인정보수정</p>
          </button>
        </Link>
      </p>
      <p className={styles.option}>설정</p>
      <p className={styles.option}>고객센터</p>

      <div className={styles.bottom}>
        <p className={styles.bottomText}>
          포항공과대학교 의료공제회
          <br />
          대표이사 : 산경과
          <br />
          사업자등록번호 : 123-45-67890
          <br />
          통신판매업신고 : 0000-포항남구-000
          <br />
          경상북도 포항시 청암로 77 | 대표번호 054-279-0000
        </p>
      </div>
    </>
  );
}
