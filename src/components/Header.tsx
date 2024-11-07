import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LogoHeader } from "./Logo";
import LogoShoppingCart from "../assets/icons/mini-cart.svg";

const HeaderContainer = styled.header`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  & div {
    margin-bottom: 25px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    & .cadastro {
      border-bottom: black solid 1px;
      &:hover {
        color: var(--tertiary);
        border-bottom: var(--primary) solid 1px;
        text-shadow: 0 0 1px var(--primary);
      }
    }
    & a {
      text-decoration: none;
    }
    & .botao-entrar {
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
    & input {
      width: 550px;
      height: 60px;
      padding: 0px 30px;
      border-radius: 8px;
      background-color: var(--light-gray-3);
      border: transparent solid 2px;
      outline: none;
      &:focus,
      &:hover {
        border: var(--primary) solid 2px;
        background-color: var(--light-gray-1);
        box-shadow: 0 0 5px var(--primary);
      }
    }
  }

  & ul {
    display: flex;
    list-style: none;
    gap: 20px;
    padding: 0px;
    & a:hover,
    & .active {
      padding-bottom: 5px;
      color: var(--primary);
      border-bottom: 2px var(--primary) solid;
      text-shadow: 0 0 1px var(--primary);
    }
  }

  & .menu {
    display: none;
    border: none;
    background: none;
    border-top: 3px solid black;
    cursor: pointer;
    &::after,
    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 3px;
      background: black;
      margin-top: 5px;
    }
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    & a {
      margin: 0 0px 0 50px;
      max-width: 140px;
    }
    & .divHeader{
      width: 100%;
      margin: 0;
    }
    & input[type="search"],
    & .cadastro,
    & div .botao-entrar {
      display: none;
    }
    & nav ul {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vw;
      height: 100vh;
      background-color: blueviolet;
      clip-path: circle(100px at -10% -20%);
      transition: 1s ease-out;

      flex-direction: column;
      align-items: center;
      gap: 20px;
      pointer-events: none;
    }
    & nav .active {
      clip-path: circle(1500px at -10% -20%);
      pointer-events: all;
    }
    & .menu {
      display: block;
    }
  }
`;

const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <button className="menu"></button>
      <div className="divHeader">
        <a href="/">
          <LogoHeader />
        </a>
        <input
          type="search"
          name="busca"
          id="busca"
          placeholder="Pesquisar produto..."
        />
        <a href="*" className="text-small cadastro">
          Cadastre-se
        </a>
        <a href="*" className="botao-entrar text-x-small-bold white">
          Entrar
        </a>
        <a href="/productlistingpage">
          <img
            src={LogoShoppingCart}
            alt="Ícone do Botão de Carrinho da loja"
          />
        </a>
      </div>
      <nav className="text-small nav">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/productlistingpage"}>Produtos</NavLink>
          </li>
          <li>
            <NavLink to={"/categorypage"}>Categorias</NavLink>
          </li>
          <li>
            <NavLink to={"/myorderspage"}>Meus Pedidos</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
