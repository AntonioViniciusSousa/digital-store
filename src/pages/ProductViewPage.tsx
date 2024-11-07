import Gallery from "../components/Gallery";
import { Section } from "../components/Section";
import image from "../assets/intro-image/tennis-product.svg";
import IconTennis1 from "../../public/img/produto-detalhes-icone-tenis-destaque1.svg";
import IconTennis2 from "../../public/img/produto-detalhes-icone-tenis-destaque2.svg";
import IconTennis3 from "../../public/img/produto-detalhes-icone-tenis-destaque3.svg";
import IconTennis4 from "../../public/img/produto-detalhes-icone-tenis-destaque4.svg";
import IconTennis5 from "../../public/img/produto-detalhes-icone-tenis-destaque5.svg";
import ProductListing from "../components/ProductListing";
import BuyBox from "../components/BuyBox";
import styled from "styled-components";

const ProductContainer = styled.div`
  background-color: var(--cor-background);
  & .descricao {
    margin-left: 50px;
    padding-top: 50px;
  }
  & .visual {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 50px;
  }
  @media (max-width: 900px) {
    display: grid;
    & .descricao {
      font: 500 0.75rem/1.125rem "Inter", sans-serif;
      margin-left: 20px;
      padding-top: 50px;
      width: calc(100vw - 40px);
      overflow-wrap: break-word;
    }

    & .visual {
      grid-template-columns: auto;
    }
  }
`;

const ProductViewPage = () => {
  const images = [
    { src: IconTennis1 },
    { src: IconTennis2 },
    { src: IconTennis3 },
    { src: IconTennis4 },
    { src: IconTennis5 },
  ];
  const products = [
    {
      name: "Tênis",
      description: "K-Swiss V8 - Masculino",
      price: "R$200",
      priceDiscount: "R$100",
      imageProduct: image,
    },
    {
      name: "Tênis",
      description: "K-Swiss V8 - Masculino",
      price: "R$200",
      priceDiscount: "R$100",
      imageProduct: image,
    },
    {
      name: "Tênis",
      description: "K-Swiss V8 - Masculino",
      price: "R$200",
      priceDiscount: "R$100",
      imageProduct: image,
    },
    {
      name: "Tênis",
      description: "K-Swiss V8 - Masculino",
      price: "R$200",
      priceDiscount: "R$100",
      imageProduct: image,
    },
  ];

  return (
    <>
      <ProductContainer>
        <p className="descricao">
          <strong className="text-x-small-bold dark-gray-2">Home</strong>
          <span className="text-x-small dark-gray-2">
            / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature
            Masculino
          </span>
        </p>

        <div className="visual">
          <Gallery
            className="custom-gallery"
            width="750px"
            height="570px"
            radius="4px"
            showThumbs
            images={images}
          />

          <BuyBox />
        </div>
      </ProductContainer>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ text: "Ver todos", href: "https://redirect.link" }}
      >
        <ProductListing products={products} />
      </Section>
    </>
  );
};

export default ProductViewPage;
