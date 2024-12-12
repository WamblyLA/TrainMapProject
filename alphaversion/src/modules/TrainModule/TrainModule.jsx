import React from "react";
import styles from "./TrainModule.module.scss";
const TrainModule = ({index, train, departure, arrive}) => {
  return (
    <li key = {index} className={styles["wrapper"]}>
        <strong>Поезд:</strong>{train}<br />
        <strong>Отправление:</strong>{departure}<br />
        <strong>Прибытие:</strong>{arrive}
    </li>
  );
}
export default TrainModule;
