import { Link } from "react-router-dom";
import { FaMeteor } from "react-icons/fa";
import postechImage from "./postechimage.png";
import styled from "styled-components";
import styles from "./Deduction_home.module.scss";

export default function Deduction_home() {
  const ProgressBar = styled.div`
    width: 100%;
    height: 50px;
    background-color: #dedede;
    border: 1px solid;
    border-color: black;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.8rem;
    margin-top: 10px;
    margin-bottom: 0px;
    overflow: hidden;
  `;

  const Progress = styled.div`
    width: ${(props) => props.width}%;
    height: 50px;
    padding: 0;
    text-align: center;
    background-color: #c80150;
  `;

  return (
    <>
      <h1 className={styles.title}>의료공제탭</h1>
      <div className={styles.Bar}>
        <label style={{ paddingBottom: 30, fontSize: 30 }}>2024년-1학기</label>
        <label>전체 수혜금액 - 10만원</label>
        <ProgressBar>
          <Progress width={20} />
        </ProgressBar>
        <div className={styles.gauge}>
          <p className={styles.gaugeStart}>0원</p>
          <p className={styles.gaugeEnd}>50만원</p>
        </div>

        <label style={{ paddingTop: 20 }}>외래진료 수혜금액 - 10만원</label>
        <ProgressBar>
          <Progress width={50} />
          <p>asdasd</p>
        </ProgressBar>
        <div className={styles.gauge}>
          <p className={styles.gaugeStart}>0원</p>
          <p className={styles.gaugeEnd}>20만원</p>
        </div>
      </div>
      <div className={styles.DeductionIcon}>
        <Link to="deduction_apply1">
          <button>
            <FaMeteor size="20" color="black"></FaMeteor>
            <p>신청</p>
          </button>
        </Link>
        <Link to="deduction_history">
          <button>
            <FaMeteor size="20" color="black"></FaMeteor>
            <p>신청현황/내역</p>
          </button>
        </Link>
        <Link to="deduction_mypage">
          <button>
            <FaMeteor size="20" color="black"></FaMeteor>
            <p>마이페이지</p>
          </button>
        </Link>
      </div>
      <div>
        <h3>의료공제회 홈페이지</h3>
        <a href="https://smcp.postech.ac.kr/">
          <img src={postechImage} />
        </a>
      </div>
    </>
  );
}
