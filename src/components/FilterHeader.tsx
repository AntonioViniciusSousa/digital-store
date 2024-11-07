import styled from "styled-components";

const SectionFilterContainer = styled.section`
  padding: 50px 50px 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--cor-background);
  & select {
    font-size: 16px;
    background-color: rgba(249, 248, 254, 1);
    border-radius: 4px;
    border: 1px solid black;
    width: 350px;
    height: 60px;
    padding: 10px;
  }
  @media (max-width: 900px) {
    display: grid;
    gap: 20px;
    & p {
      grid-row: 2;
      font-size: 14px;
      & span {
        font-size: 14px;
      }
    }
    & select {
      font-size: 13px;
      width: 265px;
      height: 60px;
      padding: 10px;
    }
  }
`;

const FilterHeader = () => {
  return (
    <SectionFilterContainer>
      <p className="text-small-bold dark-gray-2">
        Resultados para “Tênis”
        <span className="text-small dark-gray-2"> - 389 produtos</span>
      </p>
      <form action="">
        <select name="ordenar" id="" className="dark-gray-2">
          <option value="zero">Selecione...</option>
          <option value="mais-relevante">
            <strong>Ordenar por:</strong> mais relevantes
          </option>
          <option value="menor-relevante">
            <strong>Ordenar por:</strong> menor relevantes
          </option>
        </select>
      </form>
    </SectionFilterContainer>
  );
};

export default FilterHeader;
