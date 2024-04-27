import React from "react";
import styles from "./Commontable.module.scss";

const CommonTableColumn = ({ children }) => {
  return <td className={styles.commonTableColumn}>{children}</td>;
};

export default CommonTableColumn;
