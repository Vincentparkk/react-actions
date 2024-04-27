import React from "react";
import styles from "./Commontable.module.scss";

const CommonTableRow = ({ children }) => {
  return <td className={styles.commonTableRow}>{children}</td>;
};

export default CommonTableRow;
