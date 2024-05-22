export const EmailLayout = ({ onChange, onBlur, email, error }) => {
  return (
    <fieldset>
      <label htmlFor="login">Введите Email</label>
      {error && <div className="error">{error}</div>}
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
      />
    </fieldset>
  );
};
