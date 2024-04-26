import styles from "./Deduction_apply2.module.scss";
import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";

export default function Deduction_apply2(props) {
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
  const selectApplyTypeList = ["선택", "일반청구", "특별청구"];
  const selectDiagnosisTypeList = ["선택", "외래", "입원"];

  const [paper1, setPaper1] = useState("");
  const [paper2, setPaper2] = useState("");
  const [paper3, setPaper3] = useState("");
  const [paper4, setPaper4] = useState("");
  const [paper5, setPaper5] = useState("");
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [price, setPrice] = useState("");
  const [treatmentDate, setTreatmentDate] = useState("");
  const [hospital, setHospital] = useState("");
  const [disease, setDisease] = useState("");
  const [reason, setReason] = useState("");
  const [signature, setSignature] = useState("");

  const [selectedSex, setSelectedSex] = useState("");
  const [selectedApplyType, setSelectedApplyType] = useState("");
  const [selectedDiagnosisType, setSelectedDiagnosisType] = useState("");
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
  const handleApplyType = (event) => {
    setSelectedApplyType(event.target.value);
  };
  const handleDiagnosisType = (event) => {
    setSelectedDiagnosisType(event.target.value);
  };
  const handleNameChange = (event) => setName(event.target.value);
  const handleStudentIdChange = (event) => setStudentId(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleTreatmentDateChange = (event) =>
    setTreatmentDate(event.target.value);
  const handleBankChange = (event) => setBank(event.target.value);
  const handleAccountNumberChange = (event) =>
    setAccountNumber(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleHospitalChange = (event) => setHospital(event.target.value);
  const handleDiseaseChange = (event) => setDisease(event.target.value);
  const handleReasonChange = (event) => setReason(event.target.value);
  const handleSignatureChange = (event) => setSignature(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  const handleSubmitReason = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  const handleSubmitSignature = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  // 모든 정보가 입력되어야 다음 페이지로 넘어가게 한다.
  const isFormFilled = () => {
    return (
      name !== "" &&
      studentId !== "" &&
      phoneNumber !== "" &&
      email !== "" &&
      bank !== "" &&
      accountNumber !== "" &&
      price !== "" &&
      treatmentDate !== "" &&
      hospital !== "" &&
      disease !== "" &&
      reason !== "" &&
      signature !== "" &&
      selectedSex !== "" &&
      selectedApplyType !== "" &&
      selectedDiagnosisType !== "" &&
      selectedDepartment !== "" &&
      selectedDegree !== ""
    );
  };

  //이전 정보 사용을 클릭하면
  // 이전 정보 상태
  const [previousInfo, setPreviousInfo] = useState({
    name: "포스텍",
    studentId: "20190000",
    phoneNumber: "01000000000",
    email: "포스텍@postech.ac.kr",
    bank: "포항은행",
    accountNumber: "1111111111222222",
    selectedDepartment: "산업경영공학과",
    selectedSex: "남자",
    selectedApplyType: "일반청구",
    selectedDegree: "학사",
  });

  const [info, setInfo] = useState(false);

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
      setSelectedApplyType(previousInfo.selectedApplyType);
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
      setSelectedApplyType("");
      setSelectedDegree("");
    }
  }, [info]); // info 상태 변경 시에만 useEffect 실행

  return (
    <>
      <h1 className={styles.title}>신청정보기입</h1>
      <div className={styles.center}>
        <Checkbox checked={info} onChange={setInfo}>
          이전 신청 정보와 동일
        </Checkbox>
        <form onSubmit={handleSubmit} className={styles.container}>
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
            <label>청구유형</label>
          </div>
          <div className={styles.subInput}>
            <select
              className={styles.inputStyle}
              onChange={handleApplyType}
              value={selectedApplyType}
            >
              {selectApplyTypeList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
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
          <div className={styles.subTitle}>
            <label>제출서류</label>
          </div>
          <div className={styles.subInput}>
            <div className={styles.subCheckBox}>
              <Checkbox checked={paper1} onChange={setPaper1}>
                <span style={{ fontSize: "12px" }}>진료비계산서</span>
              </Checkbox>
              <Checkbox checked={paper2} onChange={setPaper2}>
                <span style={{ fontSize: "12px" }}>결제영수증(진료비)</span>
              </Checkbox>
              <Checkbox checked={paper3} onChange={setPaper3}>
                <span style={{ fontSize: "12px" }}>약제비계산서</span>
              </Checkbox>
            </div>
            <div className={styles.subCheckBox}>
              <Checkbox checked={paper4} onChange={setPaper4}>
                <span style={{ fontSize: "12px" }}>결제영수증(약제비)</span>
              </Checkbox>
              <Checkbox checked={paper5} onChange={setPaper5}>
                <span style={{ fontSize: "12px" }}>진료확인서(특별청구시)</span>
              </Checkbox>
            </div>
          </div>
          <div className={styles.subTitle}>
            <label>첨부파일1</label>
          </div>
          <div className={styles.subInput}>
            <input type="file" accept="image/*" />
          </div>
          <div className={styles.subTitle}>
            <label>첨부파일2</label>
          </div>
          <div className={styles.subInput}>
            <input type="file" accept="image/*" />
          </div>
          <div className={styles.subTitle}>
            <label>첨부파일3</label>
          </div>
          <div className={styles.subInput}>
            <input type="file" accept="image/*" />
          </div>
          <div className={styles.subTitle}>
            <label>첨부파일4</label>
          </div>
          <div className={styles.subInput}>
            <input type="file" accept="image/*" />
          </div>
          <div className={styles.subTitle}>
            <label>첨부파일5</label>
          </div>
          <div className={styles.subInput}>
            <input type="file" accept="image/*" />
          </div>
          <div className={styles.subTitle}>
            <label>신청금액(원)</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={price}
              onChange={handlePriceChange}
              placeholder="급여본인부담금 합계의 80%"
            />
          </div>
          <div className={styles.subTitle}>
            <label>진료구분</label>
          </div>
          <div className={styles.subInput}>
            <select
              className={styles.inputStyle}
              onChange={handleDiagnosisType}
              value={selectedDiagnosisType}
            >
              {selectDiagnosisTypeList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.subTitle}>
            <label>진료날짜</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={treatmentDate}
              onChange={handleTreatmentDateChange}
              placeholder="YY.MM.DD"
            />
          </div>
          <div className={styles.subTitle}>
            <label>진료병원</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={hospital}
              onChange={handleHospitalChange}
            />
          </div>
          <div className={styles.subTitle}>
            <label>진단명</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={disease}
              onChange={handleDiseaseChange}
            />
          </div>
        </form>
        <form onSubmit={handleSubmitReason} className={styles.containerReason}>
          <div className={styles.subTitle}>
            <label>치료경위</label>
          </div>
          <div className={styles.subInput}>
            <div className={styles.subInput}>
              <textarea
                className={styles.reasonText}
                value={reason}
                onChange={handleReasonChange}
                placeholder="*질병치료: 발생(추정)원인과 증상에 대하여 기재*사고/상해치료: 6하원칙에 입각한 상세경위 기재*제출하신 신청서는 규약에 의거 3년간 파일철로 보관되며, 외부로 유출되지 않음을 말씀드립니다."
              />
            </div>
          </div>
        </form>
        <form
          onSubmit={handleSubmitSignature}
          className={styles.containerSignature}
        >
          <div className={styles.subTitle}>
            <label>서명</label>
          </div>
          <div className={styles.subInput}>
            <input
              className={styles.inputStyle}
              type="text"
              value={signature}
              onChange={handleSignatureChange}
              placeholder="한글로 이름입력"
            />
          </div>
        </form>
      </div>
      <article>
        <footer>
          <Link
            to="/deduction_home/deduction_apply3"
            disabled={!isFormFilled()}
          >
            <button disabled={!isFormFilled()}>
              <p>신청</p>
            </button>
          </Link>
        </footer>
      </article>
    </>
  );
}
