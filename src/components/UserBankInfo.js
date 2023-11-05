function UserBankInfo({ balance, loan }) {
  return (
    <div className="user-bank-info">
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
    </div>
  );
}

export default UserBankInfo;
