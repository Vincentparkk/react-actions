import React from "react";
import { Link } from "react-router-dom";
import deductionImage from "./deductionimage.jpg";
import healthImage from "./healthimage.jpg";
import styles from "./Card.module.scss";

function Card() {
  return (
    <>
      <p>Card</p>
      <div className={styles.wholePage}>
        <div className={styles.movieContainer}>
          <Link to="/deduction_home">
            <img src={deductionImage} />
            <div className={styles.moiveInfo}>
              <h4>의료공제</h4>
            </div>
          </Link>
        </div>
        <div className={styles.movieContainer}>
          <Link to="/health">
            <img src={healthImage} />
            <div className={styles.moiveInfo}>
              <h4>보건실</h4>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
