import React from 'react';
import Input from '../Input/Input';
import formType from '../../constants/formType';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { changeFilter } from '../../redux/filter/filterSlice';
import { Container } from './Filter.styled';
import Button from '../Button/Button';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e));
  };

  return (
    <Container>
      <Input
        placeholder='Search...'
        onChangeText={handleChangeFilter}
        value={filter}
        formType={formType.filter}
      />
      <Button
      // action={handleSubmit(setNewContact)}
      // btnType={iconBtnType.accept}
      // disabled={isLoading}
      >
        {/* <Ionicons name='checkmark' size={30} /> */}
      </Button>
    </Container>
  );
};

export default Filter;
