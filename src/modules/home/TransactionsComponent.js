import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Container = styled.div`
  background-color: transparent;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 0;
  font-size: 18px;
  width: 100%;
  gap: 12px;
  font-weight: bold;
  overflow-y: auto !important;
  max-height: 400px;
  & input {
    padding: 12px 15px;
    border-radius: 10px;
    background: #f0f4ff;
    border: 2px solid #e6e8e9;
    outline: none;
    font-size: 14px;
    transition: all 0.3s ease;
    &:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      background-color: #ffffff;
    }
  }
`;
const Cell = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  padding: 15px 18px;
  font-size: 14px;
  border-radius: 12px;
  border: none;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-left: 4px solid ${(props) => (props.isExpense ? "#ef4444" : "#34d399")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
      <span>{props.payload?.desc}</span>
      <span>${props.payload?.amount}</span>
    </Cell>
  );
};
const TransactionsComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transactions);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.map((payload) => (
        <TransactionCell payload={payload} />
      ))}
    </Container>
  );
};
export default TransactionsComponent;
