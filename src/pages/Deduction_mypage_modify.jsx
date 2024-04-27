import styles from "./Deduction_mypage_modify.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "./Back_button";

export default function Deduction_mypage_modify(props) {
  const selectDepartmentList = [
    "선택",
    "무은재학부",
    "수학과",
    "물리학과",
    "화학과",
    "생명과학과",
    "신소재공학과",
    "기계공학과",
    "산업경영공학과",
    "전자전기공학과",
    "컴퓨터공학과",
    "화학공학과",
    "IT융합공학과",
    "반도체공학과",
    "환경공학부",
    "인공지능대학원",
    "첨단원자력공학부",
    "친환경소재대학원",
    "시스템생명공학부",
    "첨단재료공학부",
    "융합대학원",
  ];
  const selectDegreeList = ["선택", "학사", "석사", "박사", "통합"];
  const selectSexList = ["선택", "남자", "여자"];

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");

  const handleSelectDepartment = (event) => {
    setSelectedDepartment(event.target.value);
  };
  const handleSelectDegree = (event) => {
    setSelectedDegree(event.target.value);
  };
  const handleSex = (event) => {
    setSelectedSex(event.target.value);
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleStudentIdChange = (event) => setStudentId(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleBankChange = (event) => setBank(event.target.value);
  const handleAccountNumberChange = (event) =>
    setAccountNumber(event.target.value);

  // 모든 정보가 입력되어야 다음 페이지로 넘어가게 한다.
  const isFormFilled = () => {
    return (
      name !== "" &&
      studentId !== "" &&
      phoneNumber !== "" &&
      email !== "" &&
      bank !== "" &&
      accountNumber !== "" &&
      selectedSex !== "" &&
      selectedDepartment !== "" &&
      selectedDegree !== ""
    );
  };

  //이전 정보 사용을 클릭하면
  // 이전 정보 상태
  const [personT, setPersonT] = useState({});
  const [previousInfo, setPreviousInfo] = useState({
    name: "",
    studentId: "",
    phoneNumber: "",
    email: "",
    bank: "",
    accountNumber: "",
    selectedDepartment: "",
    selectedSex: "",
    selectedDegree: "",
  });

  const [beforeId, setBeforeId] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_TODOS}/personalInfo`)
      .then((res) => res.json())
      .then((data) => {
        setPersonT(data[0]); // 가정: 서버 응답의 첫 번째 항목이 필요한 데이터
        setBeforeId(data[0].id);
      });
  }, []);

  useEffect(() => {
    if (personT && Object.keys(personT).length > 0) {
      setPreviousInfo({
        name: personT.name,
        studentId: personT.studentId,
        phoneNumber: personT.phoneNumber,
        email: personT.email,
        bank: personT.bank,
        accountNumber: personT.accountNumber,
        selectedDepartment: personT.selectedDepartment,
        selectedSex: personT.selectedSex,
        selectedDegree: personT.selectedDegree,
      });
    }
  }, [personT]);

  useEffect(() => {
    setName(previousInfo.name);
    setStudentId(previousInfo.studentId);
    setPhoneNumber(previousInfo.phoneNumber);
    setEmail(previousInfo.email);
    setBank(previousInfo.bank);
    setAccountNumber(previousInfo.accountNumber);
    setSelectedDepartment(previousInfo.selectedDepartment);
    setSelectedSex(previousInfo.selectedSex);
    setSelectedDegree(previousInfo.selectedDegree);
  }, [previousInfo]); // info 상태 변경 시에만 useEffect 실행

  function save() {
    const saveInfo = {
      name: name,
      studentId: studentId,
      phoneNumber: phoneNumber,
      email: email,
      bank: bank,
      accountNumber: accountNumber,
      selectedDepartment: selectedDepartment,
      selectedSex: selectedSex,
      selectedDegree: selectedDegree,
    };
    console.log(saveInfo, "이건?");
    console.log(beforeId);
    fetch(`${process.env.REACT_APP_TODOS}/personalInfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data saved:", data);
      })
      .catch((error) => {
        console.error("Failed to save data:", error);
      });
  }

  function del() {
    fetch(`${process.env.REACT_APP_TODOS}/personalInfo/${beforeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data deleted:", data);
      })
      .catch((error) => {
        console.error("Failed to delete data:", error);
      });
  }

  return (
    <>
      <div className={styles.top}>
        <BackButton />
        <h1 className={styles.title}>개인정보수정</h1>
      </div>

      <div className={styles.center}>
        <form className={styles.container}>
          <div className={styles.subTitle}>
            <label>이름</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles.subTitle}>
            <label>학과</label>
          </div>
          <div className={styles.subInput}>
            <select
              className={styles.inputStyle}
              onChange={handleSelectDepartment}
              value={selectedDepartment}
            >
              {selectDepartmentList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.subTitle}>
            <label>과정</label>
          </div>
          <div className={styles.subInput}>
            <select
              className={styles.inputStyle}
              onChange={handleSelectDegree}
              value={selectedDegree}
            >
              {selectDegreeList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.subTitle}>
            <label>학번</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={studentId}
              onChange={handleStudentIdChange}
              placeholder="8자리 숫자만 입력"
            />
          </div>
          <div className={styles.subTitle}>
            <label>성별</label>
          </div>
          <div className={styles.subInput}>
            <select
              className={styles.inputStyle}
              onChange={handleSex}
              value={selectedSex}
            >
              {selectSexList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.subTitle}>
            <label>휴대전화</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="- 를 제외하고 입력"
            />
          </div>
          <div className={styles.subTitle}>
            <label>E-mail</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.subTitle}>
            <label>은행</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={bank}
              onChange={handleBankChange}
            />
          </div>
          <div className={styles.subTitle}>
            <label>계좌번호</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={accountNumber}
              onChange={handleAccountNumberChange}
            />
          </div>
        </form>
      </div>
      <article>
        <footer>
          <Link
            to="/deduction_home/deduction_mypage_modify_success"
            disabled={!isFormFilled()}
          >
            <button
              disabled={!isFormFilled()}
              onClick={() => {
                save();
                del();
              }}
            >
              <p>저장</p>
            </button>
          </Link>
        </footer>
      </article>
    </>
  );
}
