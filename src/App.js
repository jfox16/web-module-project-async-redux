
import { connect } from 'react-redux';
import styled from 'styled-components';
import './App.css';

import FoodList from 'components/FoodList';

function App() {
  return (
    <StyledApp className="App">
      <StyledTitle>Food</StyledTitle>
      <FoodList />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const StyledTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3em;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin: 0.4em;
  color: hsl(0, 0%, 25%);
`;

export default connect()(App);
