import styled from "styled-components";
import FilterGroup from "../components/FilterGroup";
import FilterHeader from "../components/FilterHeader";
import image from "../assets/intro-image/tennis-product.svg";
import ProductListing from "../components/ProductListing";

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  align-items: start;
  padding: 50px 0px;
  background-color: var(--cor-background);
  @media (max-width: 900px) {
    display: flex;
    overflow: hidden;
    height: 1250px;
  }
  @media (max-width: 750px) {
    height: 1220px;
  }
  @media (max-width: 600px) {
    height: 1100px;
  }
`;

const DivContainerList = styled.div`
  padding: 0px 50px;
  background-color: var(--cor-background);
  @media (max-width: 900px) {
    padding: 0 20px;
    display: grid;
    grid-template-columns: auto auto;
  }
`;

const ProductListingPage = () => {
  const filterOptionsMarka = [
    { text: "Adidas", value: "marka-adidas" },
    { text: "Calenciaga", value: "marka-calenciaga" },
    { text: "K-Swiss", value: "marka-kswiss" },
    { text: "Nike", value: "marka-nike" },
    { text: "Puma", value: "marka-puma" },
  ];
  const filterOptionsCategorias = [
    { text: "Esporte e lazer", value: "categoria-esporte" },
    { text: "Casual", value: "categoria-casual" },
    { text: "Utilitário", value: "categoria-utilitario" },
    { text: "Corrida", value: "categoria-corrida" },
  ];
  const filterOptionsGenero = [
    { text: "Masculino", value: "genero-masculino" },
    { text: "Feminino", value: "genero-femenino" },
    { text: "Unisex", value: "genero-unisex" },
  ];
  const filterOptionsEstado = [
    { text: "Novo", value: "estado-novo" },
    { text: "Usado", value: "estado-usado" },
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
      <FilterHeader />

      <DivContainer>
        <div>
          <FilterGroup
            title="Filtrar por"
            inputType="checkbox"
            titleOption="Marka"
            options={filterOptionsMarka}
            showTitle={true}
          />

          <FilterGroup
            inputType="checkbox"
            titleOption="Categoria"
            options={filterOptionsCategorias}
            showTitle={false}
          />

          <FilterGroup
            inputType="checkbox"
            titleOption="Gênero"
            options={filterOptionsGenero}
            showTitle={false}
          />
          <FilterGroup
            inputType="radio"
            titleOption="Estado"
            options={filterOptionsEstado}
            showTitle={false}
          />
        </div>
        <DivContainerList>
          <ProductListing products={products} />
        </DivContainerList>
      </DivContainer>
    </>
  );
};

export default ProductListingPage;
