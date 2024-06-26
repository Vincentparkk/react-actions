import BackButton from "./Back_button";
import styles from "./Deduction_history.module.scss";
import React from "react";
import CommonTable from "./Commontable";

export default function Deduction_history() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.top}>
          <BackButton />
          <h1 className={styles.title}>의료공제 신청현황/기록</h1>
        </div>
        <div className={styles.center}>
          <CommonTable
            headersName={["글번호", "진료병원", "상태", "진료날짜"]}
          ></CommonTable>
        </div>
      </div>
    </>
  );
}
