import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import styled from "styled-components";
import { Loader } from "../../../common/components/Loader";
import { StyledButton } from "../../../common/components/StyledButton";
import { ADD, RESET, RESET_ALL } from "../../../common/constants";
import { utils } from "../../../common/utils";
import { useSelectProducts } from "../productsHooks";
import { addFilter, deleteFilter, resetFilter } from "../productsSlice";
import { useFetchFilters, useFilterNavigation } from "./filterHooks";

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

const Selector = ({ title, filterOptions, reset, setReset, urlFilters }) => {
  // idk how to name this. value = {value: 'filterId', label: 'black'}
  const [value, setValue] = useState(
    urlFilters
      ? utils.findUrlFilterInOptions(urlFilters, filterOptions.filters)
      : null
  );
  const [prevValue, setPrevValue] = useState(null);
  const [actionType, setActionType] = useState(null);

  useFilterNavigation()

  const resetState = () => {
    setValue(null);
    setPrevValue(null);
  };

  const handleNewValue = (newValue) => {
    setValue(newValue);
    setPrevValue(value);
    setActionType(ADD);
  };

  const handleClickReset = () => {
    setActionType(RESET);
  };

  useEffect(() => {
    if (reset) {
      setActionType(RESET_ALL);
      setReset(false);
    }
  }, [reset, setReset, actionType]);

  /** useSelectFilters hook / */
  const dispatch = useDispatch();

  useEffect(() => {
    // Здесь можно конечно и switch(actionType) но мне как-то if'ы приятней смотрятся
    if (actionType === ADD) {
      if (prevValue) {
        dispatch(deleteFilter({ filter: prevValue.value }));
      } 
        dispatch(addFilter({ filter: value.value }));
    }
    if (actionType === RESET) {
      try {
        dispatch(deleteFilter({ filter: value.value }));
      } catch (error) {
        if (error === TypeError) alert("select value is already null");
      }
      resetState();
    }
    if (actionType === RESET_ALL) {
      dispatch(resetFilter());
      resetState();
    }
    setActionType(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionType]);
  /** useSelectFilters hook. */

  return (
    <StyledItem key={Date.now()}>
      <Select
        value={value}
        onChange={handleNewValue}
        placeholder={title}
        options={filterOptions.filters}
      />
      <StyledButton onClick={handleClickReset}> Reset </StyledButton>
    </StyledItem>
  );
};

const SelectorsList = ({ filters, urlFilters }) => {
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
              urlFilters={urlFilters}
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

export const Filter = ({ urlFilters }) => {
  const { stateCatalog } = useSelectProducts();
  const filters = useFetchFilters(stateCatalog.id);
  if (filters)
    return (
      <FilterContent>
        <SelectorsList urlFilters={urlFilters} filters={filters} />
      </FilterContent>
    );
  return <Loader />;
};
