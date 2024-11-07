import styled from "styled-components";
import IconFace from "../assets/icons/facebook.svg";
import IconInsta from "../assets/icons/instagram.svg";
import IconTwitter from "../assets/icons/twitter.svg";
import { LogoFooter } from "./Logo";
import { CardFooter } from "../card/CardFooter";
import { informationsFooter, informationsFooter2 } from "../Datas";

const FooterContainer = styled.footer`
  padding: 50px;
  background-color: var(--dark-gray);
  display: grid;
  grid-template-columns: 300px 135px 90px 200px;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: column;
    & h2 {
      margin-bottom: 28px;
    }
  }
  & p {
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }
  & a {
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
  }
  & .item-footer {
    margin-bottom: 30px;
    & li a:hover {
      color: var(--primary);
      text-shadow: 0 0 10px var(--primary);
    }
    & .logo-footer {
      margin-bottom: 20px;
    }
    & #redes-footer {
      display: flex;
      flex-direction: row;
      gap: 35px;
      margin-top: 20px;
    }
  }
  & .item-contato a:hover {
    color: var(--primary);
    text-shadow: 0 0 10px var(--primary);
  }
  & .direitos {
    grid-column: 1/-1;
    text-align: center;
    &:hover {
      color: var(--primary);
      text-shadow: 0 0 10px var(--primary);
    }
  }
  & hr {
    grid-row: 2;
    grid-column: 1/-1;
    margin-bottom: 30px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    & .footer-cabecalho{
      grid-column: 1/-1;
    }
    & .footer-informacao,
    & .footer-categoria {
      grid-row: 3;
    }
    & .footer-contato {
      grid-row: 4;
      grid-column: 1/-1;
    }
    & hr {
      grid-row: 5;
    }
    & .direitos {
      grid-row: 6;
    }
    & div {
      display: grid;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="item-footer footer-cabecalho">
        <a className="logo-footer" href="/">
          {<LogoFooter />}
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div id="redes-footer">
          <a href="">
            <img src={IconFace} alt="" />
          </a>

          <a href="">
            <img src={IconInsta} alt="" />
          </a>

          <a href="">
            <img src={IconTwitter} alt="" />
          </a>
        </div>
      </div>

      <div className="item-footer footer-informacao">
        <h2 className="text-medium-bold white">Informação</h2>

        {informationsFooter.map((item, index) => (
          <CardFooter key={index} informationsFooter={item} />
        ))}
      </div>

      <div className="item-footer footer-categoria">
        <h2 className="text-medium-bold white">Categorias</h2>

        {informationsFooter2.map((item, index) => (
          <CardFooter key={index} informationsFooter={item} />
        ))}
      </div>

      <div className="item-footer item-contato footer-contato">
        <h2 className="text-medium-bold white">Contato</h2>

        <a href="">
          Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
        </a>

        <a href="">(85) 3051-3411</a>
      </div>

      <hr />

      <p className="direitos">&copy; 2024 Digital College </p>
    </FooterContainer>
  );
};

export default Footer;
