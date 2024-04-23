import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <h1>Logo</h1>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  padding: 0.5rem;
  background-color: orange;

  h1 {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
