import React from "react";
import styles from "./Commontable.module.scss";

const CommonTableRow = ({ children }) => {
  return <tr className={styles.commonTableRow}>{children}</tr>;
};

export default CommonTableRow;
