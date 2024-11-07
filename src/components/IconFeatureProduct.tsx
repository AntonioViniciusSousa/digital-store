import { Link } from "react-router-dom";
import styled from "styled-components";

interface SectionProps {
  name?: string;
  imageProduct?: string;
}

const DivContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  &:hover div {
    filter: drop-shadow(0px 0px 10px var(--primary));
  }
  @media (max-width: 900px) {
    display: flex;
    min-width: 120px;
    height: 135px;
  }
`;

const IconFreatureProduct: React.FC<SectionProps> = ({
  name,
  imageProduct,
}) => {
  return (
    <Link to={"*"}>
      <DivContainer>
        <div>
          <img src={imageProduct} alt="" id="colecao-camisa" />
        </div>
        <p className="text-x-small-bold dark-gray-2">{name}</p>
      </DivContainer>
    </Link>
  );
};

export default IconFreatureProduct;
