export const ConfirmationPasswordLayout = ({
  onChange,
  onBlur,
  confirmationPassword,
  error,
}) => {
  return (
    <fieldset>
      <label htmlFor="confirmation-password">Повторите введенный пароль</label>
      {error && <div className="error">{error}</div>}
      <input
        type="password"
        name="confirmation-password"
        id="confirmation-password"
        value={confirmationPassword}
        onChange={onChange}
        onBlur={onBlur}
      />
    </fieldset>
  );
};
