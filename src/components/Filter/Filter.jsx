import React from 'react';
import Input from '../Input/Input';
import formType from '../../constants/formType';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectIsAscSortType,
} from '../../redux/filter/selectors';
import {
  changeFilter,
  changeIsAscSortType,
} from '../../redux/filter/filterSlice';
import { Container } from './Filter.styled';
import Button from '../Button/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import iconBtnType from '../../constants/iconBtnType';
import { MaterialIcons } from '@expo/vector-icons';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const isAscSortType = useSelector(selectIsAscSortType);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e));
  };

  const handleClearFilter = () => {
    dispatch(changeFilter(''));
  };

  return (
    <Container>
      {/* <Input
        

      /> */}
      <Input
        placeholder='Search...'
        onChangeText={handleChangeFilter}
        value={filter}
        formType={formType.filter}
        inputWrap
        additionalAction={handleClearFilter}
        iconBtnType={iconBtnType.clearFilter}
        additionalIcon={filter && <MaterialIcons name='clear' size={20} />}
      />
      <Button
        action={() => dispatch(changeIsAscSortType())}
        btnWidth={60}
        btnType={iconBtnType.filter}
      >
        {isAscSortType ? (
          <MaterialCommunityIcons
            name='sort-alphabetical-descending'
            size={24}
          />
        ) : (
          <MaterialCommunityIcons
            name='sort-alphabetical-ascending'
            size={24}
            color='black'
          />
        )}
      </Button>
    </Container>
  );
};

export default Filter;
