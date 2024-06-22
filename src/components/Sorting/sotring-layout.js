export const SortingLayout = ({
  onSorting,
  sorted,
  setSorted,
  onDeregister,
}) => {
  return (
    <>
      {sorted ? (
        <button type="button" onClick={onDeregister} className="button">
          Отменить
        </button>
      ) : (
        <button type="button" onClick={onSorting} className="button">
          Сортировать
        </button>
      )}
    </>
  );
};
