import styles from './AboutUs/AboutUs.module.scss'

function Idea() {
    return (
      <div className={styles["text-wrapper"]}>
        <p className={styles["main-text"]}>Смысл проекта заключается в создании удобного приложения / сайта, позволяющего отслеживать движение поездов в реальном времени, смотреть доступные на данный момент поезда и сортировать их</p>
      </div>
    );
  }
  
  export {Idea};
  