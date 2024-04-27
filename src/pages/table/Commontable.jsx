import styles from "./Commontable.module.scss";

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
      <tbody>{children}</tbody>
    </table>
  );
}
