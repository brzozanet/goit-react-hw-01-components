import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles["friend-list"]}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span
              className={styles.status}
              style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
