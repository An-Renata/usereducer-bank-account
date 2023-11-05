import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import UserBankInfo from "./components/UserBankInfo";
import Button from "./components/Button";
import ButtonGrid from "./components/ButtonGrid";
/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

export default function App() {

  const []

  return (
    <div className="app">
      <Header>
        <h1>useReducer Bank Account</h1>
      </Header>
      <Main>
        <UserBankInfo />
        <ButtonGrid>
          <div className="manage-account">
            <Button>Open account</Button>
            <Button>Close account</Button>
          </div>

          <div className="update-user-account">
            <Button>Deposit 150 Eur</Button>
            <Button>Withdraw 50 Eur</Button>
            <Button>Request a loan of 5000 Eur</Button>
            <Button>Pay loan</Button>
          </div>
        </ButtonGrid>
      </Main>
    </div>
  );
}
