import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import styles from "./Back_button.module.scss";

export default function BackButton({ destination }) {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    if (destination) {
      navigate(destination);
    } else {
      navigate(-1);
    } // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  return (
    <button onClick={onClickBtn} className={styles.center}>
      <GoArrowLeft size="15" color="black"></GoArrowLeft>
    </button>
  );
}
