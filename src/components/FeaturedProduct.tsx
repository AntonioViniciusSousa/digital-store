import { Link } from "react-router-dom";
import styled from "styled-components";

interface SectionProps {
  name?: string;
  subname?: string;
  price?: string;
  buttonBuy?: string;
  imageProduct?: string;
}

const DivContainer = styled.div`
  margin-top: 10px;
  & img {
    width: 230px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 0;
  }
  & .item-colecao {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 345px;
    margin-bottom: 10px;
    background-color: rgba(216, 227, 242, 1);
    border-radius: 8px;
    padding: 20px;
    justify-content: center;
    align-items: flex-start;
    & p {
      padding: 5px 15px;
      background-color: rgba(231, 255, 134, 1);
      border-radius: 28px;
    }
    & h1 {
      margin: 15px 0px;
    }
    & a {
      padding: 20px 40px;
      background-color: var(--light-gray-3);
      border-radius: 8px;
      z-index: 1;
      &:hover {
        background-color: var(--white);
        box-shadow: 0 0 5px var(--primary);
      }
    }
  }

  @media (max-width: 900px) {
    padding: 0;
    justify-content:center;
    align-items:center;
    & .item-colecao {
      padding: 5px;
      min-width: calc(50vw - 100px);
      & img{
        width:200px;
      }
    }
  }
`;

const FreatureProduct: React.FC<SectionProps> = ({
  name,
  subname,
  price,
  buttonBuy,
  imageProduct,
}) => {
  return (
    <DivContainer>
      <div className="item-colecao">
        <p className="text-x-small-bold dark-gray-2">{price}</p>
        <h1 className="title-small-bold dark-gray">
          {name} <br />
          {subname}
        </h1>
        <Link
          to={`/productlistingpage/:id`}
          className="text-small-bold primary"
        >
          {buttonBuy}
        </Link>
        <div>
          <img src={imageProduct} alt="" />
        </div>
      </div>
    </DivContainer>
  );
};

export default FreatureProduct;
