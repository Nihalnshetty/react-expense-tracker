import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  max-width: 420px;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin: 30px 20px;
  backdrop-filter: blur(10px);
`;

const HomeComponent = (props) => {
    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.map((payload) =>
            payload.type === "EXPENSE"
                ? (exp = exp + payload.amount)
                : (inc = inc + payload.amount),
        );
        updateExpense(exp);
        updateIncome(inc);
    };
    useEffect(() => calculateBalance(), [transactions]);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    };
    return (
        <Container>
            <OverViewComponent
                expense={expense}
                income={income}
                addTransaction={addTransaction}
            />
            {transactions?.length ? (
                <TransactionsComponent transactions={transactions} />
            ) : (
                ""
            )}
        </Container>
    );
};
export default HomeComponent;
