import styles from "./Deduction_mypage_modify.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "./Back_button";
import dummy from "./db/data.json";

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
  // 이전 정보 상태\
  console.log(dummy);
  const person = dummy.personalInfo[0];

  const [previousInfo, setPreviousInfo] = useState({
    name: person.name,
    studentId: person.studentId,
    phoneNumber: person.phoneNumber,
    email: person.email,
    bank: person.bank,
    accountNumber: person.accountNumber,
    selectedDepartment: person.selectedDepartment,
    selectedSex: person.selectedSex,
    selectedDegree: person.selectedDegree,
  });

  const [info, setInfo] = useState(true);

  useEffect(() => {
    // 이전 정보와 동일을 체크하면 이전 정보를 입력하기
    if (info) {
      setName(previousInfo.name);
      setStudentId(previousInfo.studentId);
      setPhoneNumber(previousInfo.phoneNumber);
      setEmail(previousInfo.email);
      setBank(previousInfo.bank);
      setAccountNumber(previousInfo.accountNumber);
      setSelectedDepartment(previousInfo.selectedDepartment);
      setSelectedSex(previousInfo.selectedSex);
      setSelectedDegree(previousInfo.selectedDegree);
    } else {
      // 이전 정보와 동일을 체크하지 않으면 입력 필드를 초기화하기
      setName("");
      setStudentId("");
      setPhoneNumber("");
      setEmail("");
      setBank("");
      setAccountNumber("");
      setSelectedDepartment("");
      setSelectedSex("");
      setSelectedDegree("");
    }
  }, [info]); // info 상태 변경 시에만 useEffect 실행

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
            <button disabled={!isFormFilled()}>
              <p>저장</p>
            </button>
          </Link>
        </footer>
      </article>
    </>
  );
}
