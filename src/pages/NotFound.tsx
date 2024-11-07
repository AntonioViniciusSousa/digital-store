import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const CategoryContainer = styled.section`
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:20px;
  background-color: var(--cor-background);
  & h1{
    font-size: 30px;
  }
  & a {
      background-color: var(--primary);
      border-radius: 8px;
      width: 100px;
      height: 40px;
      display: grid;
      align-items: center;
      justify-items: center;
      color: var(--white);
      &:hover {
        background-color: var(--tertiary);
        box-shadow: 0 0 5px var(--primary);
      }
    }
`

const NotFound = () => {
  return (
    <>
      <Header />

      <CategoryContainer>
        <h1>Página não encontrada</h1>
        <Link to={"/"}>Voltar</Link>
      </CategoryContainer>
      <Footer />
    </>
  );
};

export default NotFound;
