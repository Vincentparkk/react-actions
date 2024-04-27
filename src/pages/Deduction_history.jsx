import BackButton from "./Back_button";
import styles from "./Deduction_history.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

import CommonTable from "./table/Commontable";
import CommonTableColumn from "./table/Commontablecolumn";
import CommonTableRow from "./table/Commontablerow";

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/toyseven/voc").then((response) => {
      setData(response.data);
    });
  }, []);

  const item = Object.values(data).map((item) => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn>{item.id}</CommonTableColumn>
      <CommonTableColumn>{item.title}</CommonTableColumn>
      <CommonTableColumn>{item.createAt}</CommonTableColumn>
      <CommonTableColumn>{item.username}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

export default function Deduction_history() {
  const item = GetData();
  return (
    <>
      <div className={styles.top}>
        <BackButton />
        <h1 className={styles.title}>의료공제신청현황/기록</h1>
      </div>

      <CommonTable headersName={["글번호", "진료병원", "상태", "진료날짜"]}>
        {item}
      </CommonTable>
    </>
  );
}
