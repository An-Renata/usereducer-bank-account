function Button({ children, dispatch, type, disabled, payload = 0 }) {
  return (
    <button
      onClick={() => dispatch({ type: type, payload: payload })}
      // if any of conditions are true, return true to a button and disable it
      disabled={disabled}
    >
      {children}
    </button>
  );
}
// disabled={isLoan}
export default Button;
