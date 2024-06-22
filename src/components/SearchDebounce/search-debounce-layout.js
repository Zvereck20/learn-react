import styles from "./styles.module.css";

export const SearchDebounceLayout = ({ value, onChange }) => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="search"
        name="search"
        id="search"
        value={value}
        placeholder="Поиск ..."
        onChange={onChange}
      />
      {/* <button type="submit" className="submit">
        Найти
      </button> */}
    </form>
  );
};
