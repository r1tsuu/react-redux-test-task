import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import styled from "styled-components";
import { Loader } from "../../../common/components/Loader";
import { StyledButton } from "../../../common/components/StyledButton";
import { ADD, DELETE, RESET, RESET_ALL } from "../../../common/constants";
import { useFetchFilters, useFilterProducts } from "../productsHooks";
import { addFilter, deleteFilter, resetFilter } from "../productsSlice";

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

const Selector = ({ title, filterOptions, reset, setReset }) => {
  const [value, setValue] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [type, setType] = useState(null);

  const handleNewValue = (newValue) => {
    setValue(newValue);
    setPrevValue(value);
    setType(ADD);
  };

  const handleClickReset = () => {
    setType(RESET);
  };

  useEffect(() => {
    if (reset) {
      setType(RESET_ALL);
      setReset(false);
    }
  }, [reset, setReset, type]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(type);
    console.log(value);
    console.log(prevValue);
    if (type === ADD) {
      if (prevValue) dispatch(deleteFilter({filter: prevValue.value}))
      dispatch(addFilter({filter: value.value}))
    }
    if (type === RESET) {
      dispatch(deleteFilter({filter: value.value}))
      setValue(null)
      setPrevValue(null)
    }
    if (type === RESET_ALL)  {
      dispatch(resetFilter())
      setValue(null)
      setPrevValue(null)
    }
    setType(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <StyledItem key={Date.now()}>
      <Select
        title={title}
        value={value}
        onChange={handleNewValue}
        placeholder={title}
        options={filterOptions.filters}
      />
      <StyledButton onClick={handleClickReset}> Reset </StyledButton>
    </StyledItem>
  );
};

const SelectorsList = ({ filters }) => {
  const [resetValues, setResetValues] = useState(false);
  const handleReset = () => {
    setResetValues(true);
  };
  return (
    <FlexContainer>
      <StyledList>
        {filters.map((filter) => (
          <StyledItem key={filter._id}>
            <Selector
              reset={resetValues}
              setReset={setResetValues}
              title={filter.group_title}
              filterOptions={filter}
            />
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
  return <Loader />;
};
