import React from "react";
// import styles from "./Statistics.module.css";

const Statistics = data => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        <li class="item">
          <span class="label">{data.label}</span>
          <span class="percentage">{data.percentage}</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
