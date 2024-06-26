import BackButton from "./Back_button";
import styles from "./Deduction_mypage.module.scss";
import { Link } from "react-router-dom";
import imeImage from "./imeimage.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Deduction_mypage() {
  const [name, setName] = useState("박산경");
  const [email, setEmail] = useState("ime.park@postech.ac.kr");
  useEffect(() => {
    const fetchPreviousApply = async () => {
      try {
        const response = await axios.get(
          "https://juniper-colossal-mail.glitch.me/personalInfo"
        );
        setName(response.data[0].name);
        setEmail(response.data[0].email);
      } catch (error) {
        console.error("Failed to fetch previousApply data:", error);
      }
    };

    fetchPreviousApply();
  }, []);
  return (
    <>
      <div className={styles.page}>
        <div className={styles.top}>
          <BackButton />
          <h1 className={styles.title}>마이페이지</h1>
        </div>
        <div className={styles.bodyOne}>
          <div className={styles.profileImage}>
            <img className={styles.image} src={imeImage} />
          </div>
          <p className={styles.user}>{name}</p>
          <p className={styles.email}>{email}</p>
        </div>

        <p className={styles.option}>
          <Link to="/deduction_home/deduction_mypage_modify">
            <button className={styles.butt}>
              <p className={styles.buttP}>개인정보수정</p>
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
      </div>
    </>
  );
}
