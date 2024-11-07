import { Section, OfferSection } from "../components/Section";
import image from "../assets/intro-image/tennis-product.svg";
import ProductListing from "../components/ProductListing";
import Points from "../assets/icons/points.svg";
import FeaturedPhone from "../assets/intro-image/featured-phone.svg";
import FeaturedShirt from "../assets/intro-image/featured-shirt.svg";
import FeaturedSneakers from "../assets/intro-image/featured-sneakers.svg";
import TennisWhite from "../assets/intro-image/tennis-white.svg";
import CollectionShirt from "../assets/intro-image/collection-shirt.svg";
import CollectionPants from "../assets/intro-image/collection-pants.svg";
import CollectionPhone from "../assets/intro-image/collection-phone.svg";
import CollectionTennis from "../assets/intro-image/collection-tennis.svg";
import styled from "styled-components";
import FreatureProduct from "../components/FeaturedProduct";
import IconFreatureProduct from "../components/IconFeatureProduct";

const DivContainer = styled.div`
  background-color: var(--light-gray-3);
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  & #icone {
    grid-column: 1/-1;
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
    grid-template-columns: 1fr;
    padding: 20px;
    & .tennis{
      width: 300px;
      grid-row: 1;
    }
    & div {
      display: grid;
      justify-items: center;
      align-items: center;
      justify-content: center;
      overflow-wrap: break-word;
      margin-bottom: 50px;
    }
    & .text-small-bold {
      font: 700 0.875rem/1.375rem "Inter", sans-serif;
      color: var(--primary);
    }
    & .title-large-bold {
      font: 800 2.5rem/3.125rem "Inter", sans-serif;
      color: var(--dark-gray);
    }
    & .text-medium {
      font: 800 0.875rem/1.375rem "Inter", sans-serif;
      color: var(--dark-gray-2);
    }
    & .botao-oferta {
      width: 335px;
      height: 48px;
      border-radius: 8px;
      background: var(--primary);
      display: grid;
      align-items: center;
      justify-items: center;
      margin-top: 25px;
      color: var(--white);
      &:hover {
        background-color: var(--tertiary);
        box-shadow: 0 0 10px var(--primary);
      }
    }
  }
`;

const HomePage = () => {
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
      <DivContainer>
        <div>
          <p className="text-small-bold warning">
            Melhores ofertas personalizadas
          </p>
          <p className="title-large-bold">Queima de stoque Nike 🔥</p>
          <p className="text-medium">
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <a
            href="produto-detalhes.html"
            className="text-small-bold white botao-oferta"
          >
            Ver Ofertas
          </a>
        </div>
        <img className="tennis" src={TennisWhite} alt="" width="700" />
        <img src={Points} alt="" width="78" id="icone" />
      </DivContainer>

      <Section title="Coleções em destaque" titleAlign="left" showClass={false}>
        <FreatureProduct
          name="Novo drop"
          subname="Supreme"
          price="30% OFF"
          buttonBuy="Comprar"
          imageProduct={FeaturedShirt}
        />
        <FreatureProduct
          name="Coleção"
          subname="Adidas"
          price="30% OFF"
          buttonBuy="Comprar"
          imageProduct={FeaturedSneakers}
        />
        <FreatureProduct
          name="Coleção"
          subname="Adidas"
          price="30% OFF"
          buttonBuy="Comprar"
          imageProduct={FeaturedPhone}
        />
      </Section>

      <Section title="Coleções em destaque" titleAlign="center" showClass={true}>
        <IconFreatureProduct name="Camisetas" imageProduct={CollectionShirt} />
        <IconFreatureProduct name="Calças" imageProduct={CollectionPants} />
        <IconFreatureProduct name="Bonés" imageProduct={CollectionPants} />
        <IconFreatureProduct name="Headphones" imageProduct={CollectionPhone} />
        <IconFreatureProduct name="Tênis" imageProduct={CollectionTennis} />
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ text: "Ver todos", href: "https://redirect.link" }}
        showClass={false}
      >
        <ProductListing products={products} />
      </Section>

      <OfferSection />
    </>
  );
};

export default HomePage;
