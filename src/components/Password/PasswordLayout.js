export const PasswordLayout = ({ onChange, onBlur, password, error }) => {
  return (
    <fieldset>
      <label htmlFor="password">Введите пароль</label>
      {error && <div className="error">{error}</div>}
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={onChange}
        onBlur={onBlur}
      />
    </fieldset>
  );
};
