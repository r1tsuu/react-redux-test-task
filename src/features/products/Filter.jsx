import { useEffect, useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { useFetchFilters } from "./useFetchFilters";

const StyledButton = styled.button`
  font-size: 25px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  margin: 10px;
  width: 75%;
  background-color: #ffe9e4;
  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

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
  const [value, setValue] = useState(null);

  const handleNewValue = (value) => setValue(value);
  const handleClickReset = () => setValue(null);

  useEffect(() => {
    if (reset) setValue(null);
  }, [reset]);

  return (
    <StyledItem key={filter._id}>
      <Select
        value={value}
        onChange={handleNewValue}
        placeholder={filter.group_title}
        options={filter.filters}
      />
      <StyledButton onClick={handleClickReset}> Reset </StyledButton>
    </StyledItem>
  );
};

const SelectorsList = ({ filters }) => {
  const [resetValues, setResetValue] = useState(false)
  const handleReset = () => { 
    setResetValue(true)
    setResetValue(false)
  }
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

const FilterStyle = styled.div`
  padding-bottom: 10rem;
`;

export const Filter = ({ catalogId }) => {
  const filters = useFetchFilters(catalogId);
  if (filters)
    return (
      <FilterStyle>
        <SelectorsList filters={filters} />
      </FilterStyle>
    );
  return null;
};
