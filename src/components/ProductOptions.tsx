import React, { useState } from 'react';
import styled from 'styled-components';

type ShapeType = 'square' | 'circle';
type OptionType = 'text' | 'color';

interface ProductOptionsProps {
  options: string[];
  radius?: string;
  shape: ShapeType;
  type: OptionType;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ options, radius = '0px', shape, type }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          shape={shape}
          radius={radius}
          type={type}
          isSelected={selectedOption === option}
          color={option}
          onClick={() => handleOptionClick(option)}
        >
          {type === 'text' ? option : ''}
        </OptionItem>
      ))}
    </OptionsContainer>
  );
};

// Styled Components

const OptionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

interface OptionItemProps {
  shape: ShapeType;
  radius: string;
  type: OptionType;
  isSelected: boolean;
  color: string;
}

const OptionItem = styled.div<OptionItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ shape }) => (shape === 'circle' ? '39px' : 'auto')};
  height: ${({ shape }) => (shape === 'circle' ? '39px' : '39px')};
  padding: ${({ shape }) => (shape === 'square' ? '0 10px' : '0')};
  border: ${({ isSelected }) => (isSelected ? '2px solid var(--primary)' : '1px solid var(--light-gray-2)')};
  border-radius: ${({ shape, radius }) => (shape === 'circle' ? '50%' : radius)};
  font-size: 24px;
  color: var(--dark-gray-2);
  background-color: ${({ type, color }) => (type === 'color' ? color : 'transparent')};
  cursor: pointer;
`;

export default ProductOptions;
