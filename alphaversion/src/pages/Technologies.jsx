import styles from './AboutUs/AboutUs.module.scss'

function Technologies() {
  return (
    <div className={styles["text-wrapper"]}>
     <div className={styles["main-text"]}>При разработке были использованы такие технологии: <br></br>
     Frontend: React, React-Router-Dom
     Backend: Различные транспортные API
     Также планируется использование MapBox и других сервисов по работе с картами
     </div>
    </div>
  );
}

export {Technologies};
