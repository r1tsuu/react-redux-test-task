import { useEffect, useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { StyledButton } from "../../common/components/StyledButton";
import { RESET } from "../../common/constants";
import { useFetchFilters, useFilterProducts } from "./hooks";

const StyledItem = styled.li`
  flex: 1 1 calc((100% / 2) - 2rem);
  padding: 10px;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
  font-size: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 800;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
`;

const Selector = ({ filter, reset }) => {
  const [filterId, setFilterId] = useState(null);
  const [prevFilterId, setPrevFilterId] = useState(null)

  const handleNewValue = (value) => {
    if (filterId) setPrevFilterId(filterId)
    setFilterId(value)
  }
  
  const handleClickReset = () => setFilterId(RESET);

  useFilterProducts(filterId, prevFilterId)

  useEffect(() => {
    setFilterId(null);
  }, [reset]);

  return (
    <StyledItem key={filter._id}>
      <Select
        value={filterId}
        onChange={handleNewValue}
        placeholder={filter.group_title}
        options={filter.filters}
      />
      <StyledButton onClick={handleClickReset}> Reset </StyledButton>
    </StyledItem>
  );
}

const SelectorsList = ({ filters }) => {
  const [resetValues, setResetValues] = useState(true);
  const handleReset = () => setResetValues(!resetValues);
  return (
    <FlexContainer>
      <StyledList>
        {filters.map((filter) => (
          <StyledItem key={filter._id}>
            <Selector reset={resetValues} filter={filter} />
          </StyledItem>
        ))}
      </StyledList>
      <StyledButton onClick={handleReset}> Reset </StyledButton>
    </FlexContainer>
  );
};

const FilterContent = styled.div`
  padding-bottom: 10rem;
`;

export const Filter = ({ catalogId }) => {
  const filters = useFetchFilters(catalogId);
  if (filters)
    return (
      <FilterContent>
        <SelectorsList filters={filters} />
      </FilterContent>
    );
  return null;
};
