import styles from "./Commontable.module.scss";
import { useState, useEffect } from "react";

export default function Commontable(props) {
  const { headersName } = props;

  const [historyT, setHistoryT] = useState([]);

  useEffect(() => {
    fetch("https://github.com/Vincentparkk/testdata/applyItem")
      .then((res) => res.json())
      .then((data) => {
        setHistoryT(data); // 가정: 서버 응답의 첫 번째 항목이 필요한 데이터
      });
  }, []);

  console.log(historyT);

  return (
    <table className={styles.commonTable}>
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return (
              <td className={styles.commonTableHeaderColumn} key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {historyT.map((item) => (
          <tr className={styles.commonTableRow}>
            <td className={styles.commonTableColumn}>{item.id}</td>
            <td className={styles.commonTableColumn}>{item.title}</td>
            <td className={styles.commonTableColumn}>{item.createAt}</td>
            <td className={styles.commonTableColumn}>{item.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
