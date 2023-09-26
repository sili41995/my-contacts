import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { GoX } from 'react-icons/go';
// import { GiCheckMark } from 'react-icons/gi';
// import { useForm } from 'react-hook-form';
// import 'react-toastify/dist/ReactToastify.css';
import {
  ButtonContainer,
  Form,
  Title,
  Input,
  Button,
  IconWrap,
  ButtonText,
} from './EditForm.styled';
// import IconButton from 'components/IconButton';
// import { errorToast, successToast } from 'utils/toasts';
// import useTargetContact from 'hooks/useTargetContact';
// import { updateContact } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import iconBtnType from 'constants/iconBtnType';
// import pagesPath from 'constants/pagesPath';
import { useForm, Controller } from 'react-hook-form';
import getContactInfo from '../../utils/getContactInfo';
import { Ionicons } from '@expo/vector-icons';
import useTargetContact from '../../hooks/useTargetContact';

const EditForm = ({ setEditContact }) => {
  // const [contact, setContact] = useState(null);
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();
  // const id = useParams()[pagesPath.dynamicParam];
  const targetContact = useTargetContact();

  const { name, number } = getContactInfo(targetContact);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      number,
    },
  });
  const onSubmit = (data) => console.log(data);

  // useEffect(() => {
  //   if (contact) {
  //     const promise = dispatch(updateContact({ contact, id }));
  //     promise
  //       .unwrap()
  //       .then(() => {
  //         successToast('Contact updated successfully');
  //       })
  //       .catch(() => {
  //         errorToast('Contact update failed');
  //       });
  //   }
  // }, [contact, dispatch, id]);

  return (
    <>
      <Form>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Name'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='name'
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Phone'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='number'
        />

        <ButtonContainer>
          <Button
            style={{ backgroundColor: '#89f2a6' }}
            // disabled={true}
            activeOpacity={0.7}
            // onPress={handleSubmit(setNewContact)}
          >
            <IconWrap>
              <Ionicons name='checkmark' size={30} />
            </IconWrap>
          </Button>
          <Button
            // disabled={isLoading}
            style={{ backgroundColor: '#ff9192' }}
            activeOpacity={0.7}
            // onPress={}
          >
            <ButtonText
            // onPress={handleCancelPress}
            >
              Cancel
            </ButtonText>
          </Button>
        </ButtonContainer>
      </Form>

      {/* <Title>Contact editing</Title>
        <Form onSubmit={handleSubmit(setContact)}>
          <Input
            defaultValue={name}
            {...register('name', { required: true })}
            type='text'
            placeholder=''
          />
          {errors.name && errorToast('Name is required')}
          <Input
            defaultValue={number}
            {...register('number', { required: true })}
            type='tel'
            placeholder=''
          />
          {errors.number && errorToast('Phone is required')}
          <Buttons>
            <IconButton
              disabled={isLoading}
              btnType={iconBtnType.accept}
              width={44}
              height={35}
              type='submit'
            >
              <GiCheckMark />
            </IconButton>
            <IconButton
              btnType={iconBtnType.cancel}
              width={44}
              height={35}
              onBtnClick={setEditContact}
            >
              <GoX />
            </IconButton>
          </Buttons>
        </Form> */}
    </>
  );
};

export default EditForm;
