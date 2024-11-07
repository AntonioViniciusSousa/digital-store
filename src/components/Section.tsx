import { ReactNode } from "react";
import styled from "styled-components";
import TennisOffer from "../assets/intro-image/offer-tennis.svg";
import { Link } from "react-router-dom";

interface SectionProps {
  title?: string;
  titleAlign?: "left" | "center";
  link?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
  showClass?: boolean;
}

const SectionCabecalhoContainer = styled.div`
  background-color: var(--cor-background);
  padding: 50px;
  & .produto-cabecalho {
    display: flex;
    justify-content: space-between;
  }
  & .section-content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 20px;
    justify-content: center;
  }
  & .section-content2 {
    display: flex;
    /* flex-wrap: wrap; */
    gap: 30px 20px;
    justify-content: center;
  }
  & .ver-mais:hover {
    color: var(--tertiary);
    border-bottom: var(--tertiary) solid 1px;
  }
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
    & .section-content2 {
      max-height: 350px;
      display: flex;
      gap: 30px 20px;
      overflow-x: auto;
      justify-content: start;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }
`;

export const Section: React.FC<SectionProps> = ({
  title,
  link,
  titleAlign,
  children,
  showClass,
}) => {
  return (
    <SectionCabecalhoContainer>
      <div
        className="produto-cabecalho"
        style={{
          justifyContent: titleAlign === "center" ? "center" : "space-between",
        }}
      >
        <h2
          className="text-large-bold dark-gray-2"
          style={{ textAlign: titleAlign }}
        >
          {title}
        </h2>
        <div>
          <a href="" className="text-medium primary ver-mais">
            {link?.text}
          </a>
          <a href="">
            <img src={link?.href} alt="" />
          </a>
        </div>
      </div>

      {showClass ? (
        <div className="section-content2">{children}</div>
      ) : (
        <div className="section-content">{children}</div>
      )}
    </SectionCabecalhoContainer>
  );
};

const SectionOfertaContainer = styled.div`
  background-color: var(--white);
  padding: 50px;
  display: flex;
  gap: 60px;
  & h2 {
    margin-bottom: 28px;
  }
  & .botao-oferta {
    width: 220px;
    height: 48px;
    border-radius: 8px;
    background: var(--primary);
    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 25px;
    &:hover {
      background-color: var(--tertiary);
      box-shadow: 0 0 10px var(--primary);
    }
  }
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
    & .botao-oferta {
      margin-bottom: 20px;
    }
    & .tennisOffer {
      width: 300px;
      margin: 50px auto -50px;
    }
    & .text-x-small-bold {
      font: 700 0.875rem/1.375rem "Inter", sans-serif;
      color: var(--warning);
    }
    & .title-large-bold {
      font: 700 1.75rem/2.25rem "Inter", sans-serif;
      color: var(--dark-gray-2);
    }
    & .text-small {
      font: 500 0.875rem/1.375rem "Inter", sans-serif;
      color: var(--dark-gray-2);
    }
  }
`;

export const OfferSection = () => {
  return (
    <SectionOfertaContainer>
      <img className="tennisOffer" src={TennisOffer} alt="" />
      <div>
        <p className="text-x-small-bold primary">Oferta especial</p>
        <h2 className="title-large-bold dark-gray-2">
          Air Jordan edição de colecionador
        </h2>
        <p className="text-small dark-gray-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Link to={"*"} className="text-small-bold white botao-oferta">
          Ver Ofertas
        </Link>
      </div>
    </SectionOfertaContainer>
  );
};
