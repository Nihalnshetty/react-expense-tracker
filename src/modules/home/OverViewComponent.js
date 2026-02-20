import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;
const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;
const ExpenseBox = styled.div`
  border-radius: 15px;
  border: none;
  padding: 20px 25px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 160px;
  background: ${(props) => (props.isIncome ? "linear-gradient(135deg, #34d399 0%, #10b981 100%)" : "linear-gradient(135deg, #f87171 0%, #ef4444 100%)")};
  box-shadow: 0 8px 20px ${(props) => (props.isIncome ? "rgba(52, 211, 153, 0.3)" : "rgba(248, 113, 113, 0.3)")};
  color: white;
  font-weight: 600;
  & span {
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;
  }
`;
const BalanceBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  & span {
    color: #ffffff;
    opacity: 100%;
    font-weight: bold;
    font-size: 22px;
  }
`;
const AddTransaction = styled.div`
  font-size: 14px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  display: flex;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(251, 191, 36, 0.4);
  }
  &:active {
    transform: translateY(0);
  }
`;
const AddTransactionContainer = styled.div`
  font-size: 15px;
  display: ${(props) => (props.isAddTxnVisible ? "flex" : "none")};
  color: #0d1d2c;
  flex-direction: column;
  border-radius: 15px;
  border: none;
  width: 100%;
  align-items: center;
  padding: 20px;
  margin: 15px 0;
  gap: 12px;
  background: #f0f4ff;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
  animation: slideIn 0.3s ease-out;
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  & input {
    width: 100%;
    outline: none;
    padding: 12px 15px;
    border-radius: 10px;
    border: 2px solid #e6e8e9;
    font-size: 14px;
    transition: all 0.3s ease;
    &:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      background-color: #ffffff;
    }
  }
`;
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  justify-content: center;
  gap: 20px;
  & input {
    width: unset;
    margin: 0;
    cursor: pointer;
  }
  & label {
    cursor: pointer;
    font-weight: 500;
    transition: color 0.3s ease;
  }
`;
const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  return (
    <AddTransactionContainer isAddTxnVisible={props.isAddTxnVisible}>
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="Expense">Income</label>
      </RadioBox>

      <AddTransaction
        onClick={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }
      >
        Add Transaction
      </AddTransaction>
    </AddTransactionContainer>
  );
};
const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTXn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Balance: ${props.income - props.expense}
        <AddTransaction onClick={() => toggleAddTXn((isVisible) => !isVisible)}>
          {isAddTxnVisible ? "CANCEL" : "ADD"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          isAddTxnVisible={isAddTxnVisible}
          addTransaction={(payload) => {
            props.addTransaction(payload);
            toggleAddTXn((isVisible) => !isVisible);
          }}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox>
          Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};
export default OverViewComponent;
