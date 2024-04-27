import styles from "./Commontable.module.scss";
import dummy from "./db/data.json";

export default function Commontable(props) {
  const { headersName, children } = props;

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
        {dummy.applyItem.map((item) => (
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
