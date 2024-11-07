import { Link } from "react-router-dom";
import styled from "styled-components";

interface SectionProps {
  name: string;
  description: string;
  price: string;
  priceDiscount: string;
  imageProduct: string;
}

const SectionProductMenuContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px 20px;
  &:hover img {
    box-shadow: 0px 0px 10px var(--primary);
    border-radius: 50%;
  }
  & .item-produto {
    display: flex;
    flex-direction: column;
    max-width: 280px;

    & .item-produto-preco {
      display: flex;
      gap: 10px;
      & span {
        text-decoration: line-through;
      }
    }
    & img {
      background-color: var(--white);
      border-radius: 4px;
    }
    & h2 {
      margin: 0px;
    }
    & .titulo {
      margin-top: 20px;
    }
  }
  @media (max-width: 900px) {
    & .item-produto {
      width: 200px;
    }
    & h2 {
      font: var(--text-x-small);
      color: var(--dark-gray-2);
    }
    & .item-produto-preco span {
      font: 400 1rem/1.75rem "Inter", sans-serif;
      color: var(--light-gray);
    }
    & .item-produto-preco p {
      font: 700 1rem/1.5rem "Inter", sans-serif;
      color: var(--dark-gray);
    }
  }
  @media (max-width: 600px) {
    & .item-produto {
      width: 150px;
    }
  }
`;

const ProductCard: React.FC<SectionProps> = ({
  name,
  description,
  price,
  priceDiscount,
  imageProduct,
}) => {
  return (
    <SectionProductMenuContainer>
      <Link to={"/productlistingpage"}>
        <div className="item-produto">
          <img src={imageProduct} alt="" />
          <p className="text-tinny-bold light-gray titulo">{name}</p>
          <h2 className="text-large dark-gray-2">{description}</h2>
          <div className="item-produto-preco">
            <span className="text-large light-gray">{price}</span>
            <p className="text-large-bold dark-gray">{priceDiscount}</p>
          </div>
        </div>
      </Link>
    </SectionProductMenuContainer>
  );
};

export default ProductCard;
