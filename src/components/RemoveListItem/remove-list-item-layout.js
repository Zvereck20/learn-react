import styles from "./styles.module.css";

export const RemoveListItemLayout = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      Удалить
    </button>
  );
};
