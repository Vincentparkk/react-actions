import React from "react";
import { Link } from "react-router-dom";
import deductionImage from "./deductionimage.jpg";
import healthImage from "./healthimage.jpg";
import styles from "./Card.module.scss";

function Card() {
  const name = "박산경";
  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.header1}>
            <p>안녕하세요,</p> <div className={styles.name}>{name}</div>
            <p>님!</p>
          </div>
          <div>원하는 카드를 선택해주세요.</div>
        </div>

        <div className={styles.wholePage}>
          <div className={styles.movieContainer}>
            <Link to="/deduction_home">
              <img className={styles.image} src={deductionImage} />
              <div className={styles.moiveInfo}>
                <h3>의료공제</h3>
              </div>
            </Link>
          </div>
          <div className={styles.movieContainer}>
            <Link to="/health">
              <img className={styles.image} src={healthImage} />
              <div className={styles.moiveInfo}>
                <h3>보건실</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
