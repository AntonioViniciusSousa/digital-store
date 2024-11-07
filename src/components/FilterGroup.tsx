import React from "react";
import styled from "styled-components";

interface Option {
  text: string;
  value?: string;
}

interface FilterGroupProps {
  title?: string;
  inputType: "checkbox" | "radio";
  titleOption?: string;
  options: Option[];
  showTitle?: boolean;
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 50px;
  padding: 20px;
  gap: 10px;
  background-color: var(--white);
  max-width: 250px;
  & .filter-group-options {
    display: flex;
    flex-direction: column;
  }
  & #Novo {
    margin-bottom: 5px;
  }
  & #Novo,
  #Usado {
    display: flex;
    gap: 10px;
  }
  & input[type="radio"] {
    cursor: pointer;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    outline: none;
    border: 1px solid var(--primary);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus {
      box-shadow: 0 0 5px var(--primary);
    }
    &:checked::before {
      opacity: 1;
    }
    &::before {
      position: absolute;
      content: "";
      width: 14px;
      height: 14px;
      background-color: var(--primary);
      border-radius: 50%;
      opacity: 0;
      transition: all 500ms ease-in-out;
    }
  }
  & input[type="checkbox"] {
    display: none;
    &:focus + span:before {
      box-shadow: 0 0 5px var(--primary);
    }
    &:checked + span:before {
      background: var(--primary);
      border: none;
      padding: 1px;
    }
    & + span:before {
      content: "";
      width: 22px;
      height: 22px;
      border-radius: 2px;
      border: 1px var(--dark-gray-3) solid;
      background-color: var(´--white);
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      margin-bottom: 5px;
      cursor: pointer;
      transition: all 500ms ease-in-out;
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const FilterGroup: React.FC<FilterGroupProps> = ({
  title = "Filtrar por",
  inputType,
  titleOption,
  options,
  showTitle = true,
}) => {
  return (
    <SectionContainer>
      {showTitle && (
        <>
          <h3 className="filter-group-title">{title}</h3>
          <hr className="filter-group-divider" />
        </>
      )}
      <div className="filter-group-options">
        <h3>{titleOption}</h3>
        {options.map((option, index) => (
          <label key={index} className="filter-option" id={option.text}>
            <input
              type={inputType}
              value={option.value || option.text}
              name={title}
              className="filter-input"
            />
            <span className="filter-label">{option.text}</span>
          </label>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FilterGroup;
