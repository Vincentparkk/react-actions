import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deductionImage from "./deductionimage.jpg";
import healthImage from "./healthimage.jpg";
import styles from "./Card.module.scss";
import axios from "axios";

function Card() {
  const [name, setName] = useState("박산경");
  useEffect(() => {
    const fetchPreviousApply = async () => {
      try {
        const response = await axios.get(
          "https://juniper-colossal-mail.glitch.me/personalInfo"
        );
        setName(response.data[0].name);
      } catch (error) {
        console.error("Failed to fetch previousApply data:", error);
      }
    };

    fetchPreviousApply();
  }, []);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.header1}>
            <p>안녕하세요, </p> <div className={styles.name}> {name}</div>
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
