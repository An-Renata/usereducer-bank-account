function Button({ children, dispatch, type, disableBtn }) {
  return (
    <button
      onClick={() => dispatch({ type: type })}
      // if any of conditions are true, return true to a button and disable it
      disabled={disableBtn}
    >
      {children}
    </button>
  );
}
// disabled={isLoan}
export default Button;
