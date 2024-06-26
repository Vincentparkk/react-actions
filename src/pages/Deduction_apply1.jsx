import styles from "./Deduction_apply1.module.scss";
import { useState } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import BackButton from "./Back_button";

export default function Deduction_apply1() {
  const [service, setService] = useState(false);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.top}>
          <BackButton />
          <h1 className={styles.title}>의료공제신청</h1>
        </div>

        <div className={styles.center}>
          <h1 className={styles.h}>의료공제회 규약</h1>
          <h1 className={styles.h}>제4장 의료보조금 지급</h1>
          <h2 className={styles.hh}>제16조 [지급기준]</h2>
          <p className={styles.p}>
            1. 의료보조금은 다음 각 호의 기준에 따라 지급한다.
            <br />
            2. 회원에게 청구대상의료비에서 20% 공제 후 지급한다.
            <br />
            3. 회원의 사망 시 의료공제회 지급 대상기준과 같은 기준을 적용하여
            선별하되 대상자에게는 장제비로 일백만원을 지급한다.
            <br />
          </p>
          <h2 className={styles.hh}>제17조 [청구대상의료비의 범위]</h2>
          <p className={styles.p}>
            1. 청구대상의료비의 범위는 질병·부상의 진료에 따르는 국민건강보험이
            요양급여대상 진료·시술비 및 약제비 중 본인부담금으로 한다.
            단,국민건강보험 가입 예정인 외국인 신입생에 한해서 비급여 대상
            본인부담금을 포함한다.
            <br />
            2. 법정 전염성 질병의 경우 유, 무 확인을 위한 1차 진료 시에만
            보조금을 지급하고, 치료비는 지급하지 아니한다.
          </p>
          <h2 className={styles.hh}>제18조 [지급한도]</h2>
          <p className={styles.p}>
            1. 의료보조금 지급액은 1인당 한 학기에 50만 원을 넘을 수 없다.
            <br />
            2. 의료보조금 지급액 중 외래진료에 대한 지급액은 1인당 한 학기에
            20만 원을 넘을 수 없다.
          </p>
          <h2 className={styles.hh}>제19조 [청구제한]</h2>
          <p className={styles.p}>
            다음 각 호에 해당하는 진료에 대하여는 의료보조금을 청구할 수 없다.
            <br />
            1. 주근깨, 사마귀 등 일상생활에 지장이 없는 피부질환
            <br />
            2. 보철, 의치, 치열교정 등 고가의 재료를 사용하는 치과질환
            <br />
            3. 안경, 콘텍트렌즈 등 시력교정을 목적으로 하는 안과질환
            <br />
            4. 미용목적의 시술 및 수술
            <br />
            5. 마약중독, 향정신성 의약품 중독 등
            <br />
            6. 보조기, 의수족, 보청기, 의안 등 보조의료기구의 구입에 소요되는
            비용
            <br />
            7. 일상생활에 지장이 없는 선천성 질환
            <br />
            8. 예방접종 (파상풍 등 치료용 예방주사 약제의 경우는 예외로 한다.)
            <br />
            9. 교통사고나 폭력사고 등 제3자가 지불의무를 지닌 사고 및 질병. (단,
            제3자가 지불능력이 없다고 판단되는 경우는 제외한다.)
            <br /> 10. 삭제
            <br />
            11. 임신으로 인한 정기검사 및 출산비용
            <br />
            12. 음주운전 및 무면허운전으로 인한 사고
            <br />
            13. 교통사고 및 안전사고 시 안전장치를 미착용 한 경우
            <br />
            14. 검사성 진료 (단, 치료를 목적으로 하는 검사의 경우에는 예외로
            한다.)
            <br />
            15. 기타 국민건강보험법의 규정에 의한 혜택 제외사항
            <br />
            16. 기타 이사회에서 의료보조금의 지급이 부당하다고 인정되는 진료비
            <br />
          </p>
          <h2 className={styles.hh}>제19조의 2 [청구제한의 변경]</h2>
          <p className={styles.p}>
            1.청구제한 항목을 개정할 경우 시행일은 다음 학기 개강일로 한다.
            <br />
            2. 창구제한 항목 개정은 다음 학기 개강일 1개월 이전까지 회원들에게
            공지되어야 한다.
          </p>
          <h2 className={styles.hh}>
            [본조신설 2013.08.29]
            <br />
            제20조 [청구 구분 및 절차]
          </h2>
          <p className={styles.p}>
            1. 의료보조금 일반청구는 학기 단위로 진료일로부터 1개월 내에 하여야
            한다. (개정 2013.12.11)(개정 2020.06.15)
            <br />
            2. 의료보조금 특별청구는 진료가 시작된 학기 내에 하여야 한다. (개정
            2016.03.31)(개정 2020.06.15)
            <br />
            3. 지급 구분은 일반청구와 특별청구로 나뉜다.
            <br />
            4.특별청구는 다음 각 호에 대한 의료보조금 청구로 정의한다.
            <br />
            01. 입원치료(개정 2020.06.15)
            <br />
            02.수술 및 동일 질병에 대한 30일 이내 4회 이상의 연속치료(개정
            2022.06.15)
            <br />
            5. 일반청구는 특별청구 대상이 아닌 모든 치료 진료에 대한 의료보조금
            청구 중 진료 및 치료 1회에 대한 본인부담금 10,000원 이상인 항목으로
            정의한다.(개정 2014.09.29)
            <br />
            6.의료보조금 청구 시 진료의료기관에서 발급한 급여, 비급여 구분이
            되어있는 영수증과 실 혹은 사본 결제영수증(카드 혹은 현금영수증)을
            의료보조금 지급 신청서와 함께 대학원총학생회 담당자에게 온 라인 혹은
            오프라인으로 제출하여야 한다. 단, 사안에 따라 추가 증빙 서류를
            요구할 수 있다.(개정 2019.03.29)
            <br />
            7. 특별청구 시 추가로 진단서를 함께 제출하여야 한다.
            <br />
            8. 의료보조금 지급은 특별한 사유가 없는 한 청구 이후 15일 이내를
            원칙으로 한다. 특별한 사유가 발생할 시 이를 청구 이후 15일 이내에
            신청자에게 서면을 통해 알려야 한다.
            <br />
            9. 특별한 사유가 있어 심의가 필요한 경우 간사는 이사회에 지급에 대한
            결정을 요청할 수 있다.
            <br />
            10. 이사회에서는 간사의 지급에 대한 판단 요청이 있을 시 요청일로부터
            1개월 이내에 이를 심의하고 지급에 대한 결정을 하여야만 한다.
            <br />
            11. 이사회에서 지급을 결정하였을 경우 간사는 결정이 통보된 이후 15일
            이내에 의료보조금을 신청자에게 지급하여야 한다. (전문개정
            2014.05.07. 시행일 2014.05.08) [전문개정2012.10.10, 시행일
            2012.10.22]
          </p>
          <h2 className={styles.hh}>제21조 [부당청구 회원 징계]</h2>
          <p className={styles.p}>
            1. 이사회는 필요 시 본회 회원을 소환하여 제19조에 의거하여
            부당청구를 심의할 수 있다.
            <br />
            2. 이사회가 부당청구라고 판단 시 다음 각 호와 같이 부당청구 한
            회원을 징계할 수 있다.
            <br />
            01. 최초 적발 시 지급액을 심의 결과 통보 후 10일 이내 반환한다. 이에
            불응할 시 회원 자격을 졸업 때까지 박탈한다.
            <br />
            02. 재차 적발 시 지급액을 심의 결과 통보 후 10일 이내 반환하고 회원
            자격을 졸업 때까지 박탈한다.
          </p>
        </div>
        <article>
          <Checkbox checked={service} onChange={setService}>
            (필수) 위 내용을 확인했습니다.
          </Checkbox>
          <footer>
            <Link to="/deduction_home/deduction_apply2" disabled={!service}>
              <button className={styles.butt} disabled={!service}>
                <p className={styles.buttP}>다음</p>
              </button>
            </Link>
          </footer>
        </article>
      </div>
    </>
  );
}
