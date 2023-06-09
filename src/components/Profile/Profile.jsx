import React from "react";
import data from "./user.json";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={data.avatar} alt={data.username} className={styles.avatar} />
        <p className={styles.name}>{data.username}</p>
        <p className={styles.tag}>{data.tag}</p>
        <p className={styles.location}>{data.location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{data.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{data.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
