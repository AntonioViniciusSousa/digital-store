import styled from "styled-components";
import ImageEstrela from "../../public/img/produto-detalhes-icone-estrelas.svg";
import ImageClassificacao from "../../public/img/produto-detalhes-icone-classificacao.svg";
import ProductOptions from "./ProductOptions";

const BuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  justify-content: space-between;
  align-items: start;
  & #produto-classificacao {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  & #produto-valor {
    display: flex;
    gap: 5px;
    align-items: baseline;
    & p {
      font-size: 32px;
    }
    & .texto-destaque {
      font-size: 16px;
      text-decoration: line-through;
      margin-left: 5px;
    }
  }
  & #produto-botao {
    padding: 10px 40px;
    border-radius: 8px;
    background-color: var(--warning);
  }
  @media (max-width: 900px) {
    width: calc(100vw - 40px);
    margin: 50px 0px 0px 20px;
    & .descricao-destaque{
      overflow-wrap: break-word;
    }
  }
`;

const BuyBox = () => {
  const sizeOptions = ["39", "40", "41", "42", "43"];
  const colorOptions = ["#6feeff", " #ff6969", "#5e5e5e", "#6d70b7"];

  return (
    <BuyContainer>
      <h3 className="title-small-bold">
        Tênis Nike Revolution <br />6 Next Nature Masculino
      </h3>
      <p className="text-tinny dark-gray-3">Casual | Nike | REF:38416711</p>
      <div id="produto-classificacao">
        <img src={ImageEstrela} alt="" />
        <img src={ImageClassificacao} alt="" />
        <p className="text-x-small light-gray">(90 avaliações )</p>
      </div>
      <div id="produto-valor">
        <span className="text-small dark-gray-2">R$</span>
        <p className="text-small-bold dark-gray-2">219,00</p>
        <span className="text-small light-gray texto-destaque">219,00</span>
      </div>
      <div>
        <p className="text-x-small-bold light-gray">Descrição do produto</p>
        <p className="text-x-small dark-gray-2 descricao-destaque">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>

      <div>
        <h2>Selecione o Tamanho:</h2>
        <ProductOptions
          options={sizeOptions}
          shape="square"
          radius="8px"
          type="text"
        />

        <h2>Selecione a Cor:</h2>
        <ProductOptions options={colorOptions} shape="circle" type="color" />
      </div>

      <a href="" className="text-small-bold light-gray-3" id="produto-botao">
        COMPRAR
      </a>
    </BuyContainer>
  );
};

export default BuyBox;
