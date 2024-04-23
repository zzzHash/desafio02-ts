import styled from "styled-components";
import { Card } from "./components/Card";

function App() {
  return (
    <Container>
      <Card />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  min-height: 100vh;
  background-color: #9413dc;
  padding: 25px;
`;
