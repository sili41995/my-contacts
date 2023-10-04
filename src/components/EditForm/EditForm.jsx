import React, { useEffect, useState } from 'react';
import { ButtonContainer, Form, Title } from './EditForm.styled';
import { useForm, Controller } from 'react-hook-form';
import getContactInfo from 'utils/getContactInfo';
import { Ionicons } from '@expo/vector-icons';
import useTargetContact from 'hooks/useTargetContact';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { errorToast, successToast } from 'utils/toasts';
import { selectIsLoading } from 'redux/contacts/selectors';
import iconBtnType from 'constants/iconBtnType';
import Button from 'components/Button/Button';
import Input from '../Input/Input';
import formType from '../../constants/formType';

const EditForm = ({ setEditContact }) => {
  const [contact, setContact] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const targetContact = useTargetContact();
  const { name, number, id } = getContactInfo(targetContact);
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

  useEffect(() => {
    if (contact) {
      const promise = dispatch(updateContact({ contact, id }));
      promise
        .unwrap()
        .then(() => {
          successToast('Contact updated successfully');
        })
        .catch(() => {
          errorToast('Contact update failed');
        });
    }
  }, [contact, dispatch, id]);

  return (
    <>
      <Title>Contact editing</Title>
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
              autoFocus={true}
              formType={formType.editContact}
            />
            // <Input
            //   placeholder='Name'
            //   onBlur={onBlur}
            //   onChangeText={onChange}
            //   value={value}
            //   autoFocus={true}
            // />
          )}
          name='name'
        />
        {errors.name && errorToast('Name is required')}
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
              keyboardType='phone-pad'
              formType={formType.editContact}
            />
          )}
          name='number'
        />
        {errors.number && errorToast('Phone is required')}
        <ButtonContainer>
          <Button
            action={handleSubmit(setContact)}
            btnType={iconBtnType.accept}
            disabled={isLoading}
          >
            <Ionicons name='checkmark' size={30} />
          </Button>
          <Button
            action={setEditContact}
            btnType={iconBtnType.cancel}
            disabled={isLoading}
            title='Cancel'
          />
        </ButtonContainer>
      </Form>
    </>
  );
};

export default EditForm;
