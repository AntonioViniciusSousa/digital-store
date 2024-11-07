import { ReactNode } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  description: string;
  price: string;
  priceDiscount: string;
  imageProduct: string;
}

interface SectionProps {
  products?: Product[];
  children?: ReactNode;
}

const SectionProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px 20px;
`;

const ProductListing: React.FC<SectionProps> = ({ products, children }) => {
  return (
    <SectionProductContainer>
      {products
        ? products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              priceDiscount={product.priceDiscount}
              imageProduct={product.imageProduct}
            />
          ))
        : children}
    </SectionProductContainer>
  );
};

export default ProductListing;
