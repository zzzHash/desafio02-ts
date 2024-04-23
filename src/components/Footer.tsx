import styled from "styled-components";

export const Footer = () => {
  return (
    <Cointaner>
      <h2>copyright© 2022</h2>
      <h1>Made by Hash</h1>
    </Cointaner>
  );
};

const Cointaner = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: orange;

  h1 {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }

  h2 {
    color: white;
    font-weight: 600;
  }
`;
