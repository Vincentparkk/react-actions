import { Link } from "react-router-dom";
import { VscGitStashApply } from "react-icons/vsc";
import { CiViewTable } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import postechImage from "./postechimage.png";
import styled from "styled-components";
import styles from "./Deduction_home.module.scss";
import BackButton from "./Back_button";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Deduction_home() {
  const ProgressBar = styled.div`
    width: 100%;
    height: 70px;
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
    height: 70px;
    padding: 0;
    text-align: center;
    background-color: #c80150;
  `;

  const [priceT, setPriceT] = useState([]);

  useEffect(() => {
    fetch("https://juniper-colossal-mail.glitch.me/applyItem")
      .then((res) => res.json())
      .then((data) => {
        setPriceT(data); // 가정: 서버 응답의 첫 번째 항목이 필요한 데이터
      });
  }, []);

  const totalPrice = priceT.reduce((accumulator, currentItem) => {
    // currentItem가 존재하고 price 속성이 있으면 숫자로 변환하여 더하고, 그렇지 않으면 누적값을 그대로 반환
    return (
      accumulator +
      (currentItem && currentItem.price ? parseFloat(currentItem.price) : 0)
    );
  }, 0);

  console.log(totalPrice);

  //데이터 초기화 버튼 기능
  const handleClick = async () => {
    try {
      // personalInfo 엔드포인트에서 모든 데이터 가져오기
      const response1 = await axios.get(
        "https://juniper-colossal-mail.glitch.me/personalInfo"
      );
      const personalInfoData = response1.data;

      // personalInfo 엔드포인트에서 가져온 데이터 중에서 id가 '8d97'인 데이터 삭제
      for (const data of personalInfoData) {
        await axios.delete(
          `https://juniper-colossal-mail.glitch.me/personalInfo/${data.id}`
        );
      }

      // personalInfo 엔드포인트에 새로운 데이터 추가
      await axios.post("https://juniper-colossal-mail.glitch.me/personalInfo", {
        id: "8d97",
        name: "박산경",
        studentId: "20190000",
        phoneNumber: "01012345678",
        email: "ime.park@postech.ac.kr",
        bank: "포항은행",
        accountNumber: "05427912341234",
        selectedDepartment: "산업경영공학과",
        selectedSex: "남자",
        selectedDegree: "학사",
      });

      // previousApply 엔드포인트에서 모든 데이터 가져오기
      const response2 = await axios.get(
        "https://juniper-colossal-mail.glitch.me/previousApply"
      );
      const previousApplyData = response2.data;

      // previousApply 엔드포인트에서 가져온 데이터 삭제
      for (const data of previousApplyData) {
        await axios.delete(
          `https://juniper-colossal-mail.glitch.me/previousApply/${data.id}`
        );
      }

      // previousApply 엔드포인트에 새로운 데이터 추가
      await axios.post(
        "https://juniper-colossal-mail.glitch.me/previousApply",
        {
          id: "16b6",
          name: "박산경",
          studentId: "20190000",
          phoneNumber: "01012341234",
          email: "ime.park@postech.ac.kr",
          bank: "포항은행",
          accountNumber: "05427912341234",
          selectedDepartment: "산업경영공학과",
          selectedSex: "남자",
          selectedApplyType: "일반청구",
          selectedDegree: "학사",
        }
      );

      // applyItem 엔드포인트에서 모든 데이터 가져오기
      const response3 = await axios.get(
        "https://juniper-colossal-mail.glitch.me/applyItem"
      );
      const applyItemData = response3.data;

      // applyItem 엔드포인트에서 가져온 데이터 삭제
      for (const data of applyItemData) {
        await axios.delete(
          `https://juniper-colossal-mail.glitch.me/applyItem/${data.id}`
        );
      }

      // applyItem 엔드포인트에 새로운 데이터 추가
      await axios.post("https://juniper-colossal-mail.glitch.me/applyItem", {
        id: 1,
        title: "포항병원",
        createAt: "지급완료",
        username: "20.10.10",
        price: "100000",
      });

      console.log("Data updated successfully");
      alert("데이터 초기화 완료");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.top}>
          <BackButton destination="/card" />
          <h1 className={styles.title}>의료공제</h1>
        </div>

        <div className={styles.Bar}>
          <label style={{ paddingTop: 10, paddingBottom: 10, fontSize: 25 }}>
            2024년-1학기
          </label>
          <label>전체 수혜금액 - {totalPrice / 10000}만원</label>
          <ProgressBar>
            <Progress width={(totalPrice / 500000) * 100} />
          </ProgressBar>
          <div className={styles.gauge}>
            <p className={styles.gaugeStart}>0원</p>
            <p className={styles.gaugeEnd}>50만원</p>
          </div>

          <label style={{ paddingTop: 10 }}>
            외래진료 수혜금액 - {totalPrice / 10000}만원
          </label>
          <ProgressBar>
            <Progress width={(totalPrice / 200000) * 100} />
            <p>asdasd</p>
          </ProgressBar>
          <div className={styles.gauge}>
            <p className={styles.gaugeStart}>0원</p>
            <p className={styles.gaugeEnd}>20만원</p>
          </div>
        </div>
        <div className={styles.DeductionIcon}>
          <Link to="deduction_apply1">
            <button className={styles.butt}>
              <VscGitStashApply size="30" color="black"></VscGitStashApply>
              <p className={styles.buttP}>신청</p>
            </button>
          </Link>
          <Link to="deduction_history">
            <button className={styles.butt}>
              <CiViewTable size="30" color="black"></CiViewTable>
              <p className={styles.buttP}>신청현황/내역</p>
            </button>
          </Link>
          <Link to="deduction_mypage">
            <button className={styles.butt}>
              <IoPersonOutline size="30" color="black"></IoPersonOutline>
              <p className={styles.buttP}>마이페이지</p>
            </button>
          </Link>
        </div>
        <div>
          <h3 className={styles.hhh}>의료공제회 홈페이지</h3>
          <a href="https://smcp.postech.ac.kr/">
            <img className={styles.image} src={postechImage} />
          </a>
        </div>
        <div>
          <button className={styles.butt} onClick={handleClick}>
            데이터 초기화
          </button>
        </div>
      </div>
    </>
  );
}
