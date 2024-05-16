export const LoginLayout = ({ onChange, onBlur, login, error }) => {
  return (
    <fieldset>
      <label htmlFor="login">Введите логин</label>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        name="login"
        id="login"
        value={login}
        onChange={onChange}
        onBlur={onBlur}
      />
    </fieldset>
  );
};
