import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 0;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 40px;
  font-size: 32px;
  font-weight: 700;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
`;

const App = () => {
  return (
    <Container>
      <Header>💰 Expense Tracker</Header>
      <HomeComponent />
    </Container>
  );
};
export default App;
