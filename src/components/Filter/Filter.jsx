import React from 'react';
import { FilterForm, FilterLabel } from './Filter.styled';
import { Input, Span } from '../ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

// const filterInputId = nanoid();

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    const normalizedValue = e.target.value.toLowerCase();
    dispatch(changeFilter(normalizedValue));
  };

  return (
    <FilterForm>
      <FilterLabel>
        <Span>Find contacts by name</Span>
        <Input
          type="name"
          value={value}
          onChange={onChange}
          placeholder="Please enter a name to search"
          // id={filterInputId}
        />
      </FilterLabel>
    </FilterForm>
  );
};

export default Filter;
