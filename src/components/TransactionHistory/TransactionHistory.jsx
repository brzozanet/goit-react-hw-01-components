import React from "react";
// import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => {
  return (
    <table className={styles["transaction-history"]}>
      <thead>
        <tr className={styles["table-header"]}>
          <th className={styles["table-header-item"]}>Type</th>
          <th className={styles["table-header-item"]}>Amount</th>
          <th className={styles["table-header-item"]}>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles["table-row"]}>
          <td className={styles["table-row-item"]}>Invoice</td>
          <td className={styles["table-row-item"]}>125</td>
          <td className={styles["table-row-item"]}>USD</td>
        </tr>
        <tr className={styles["table-row"]}>
          <td className={styles["table-row-item"]}>Withdrawal</td>
          <td className={styles["table-row-item"]}>85</td>
          <td className={styles["table-row-item"]}>USD</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionHistory;
