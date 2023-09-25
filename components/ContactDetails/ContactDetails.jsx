// import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { CiEdit } from 'react-icons/ci';
import { Container, ButtonContainer } from './ContactDetails.styled';
import { Text } from 'react-native';
import ContactInfo from '../ContactInfo/ContactInfo';
// import EditForm from 'components/EditForm';
// import ContactModalForm from 'components/ContactModalForm';
// import IconButton from 'components/IconButton';
// import makeBlur from 'utils/makeBlur';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import iconBtnType from 'constants/iconBtnType';
// import pagesPath from 'constants/pagesPath';
// import useDeleteContact from 'hooks/useDeleteContact';

const ContactDetails = () => {
  const [editContact, setEditContact] = useState(false);
  // const isLoading = useSelector(selectIsLoading);
  // const id = useParams()[pagesPath.dynamicParam];
  // const { search } = useLocation();
  // const path = `/${pagesPath.contactsPath + search}`;
  // const setContactId = useDeleteContact(path);

  // const setEditState = () => {
  //   setEditContact((editContact) => !editContact);
  // };

  // const handleEditBtnClick = (e) => {
  //   setEditState();
  //   makeBlur(e.currentTarget);
  // };

  return (
    <>
      <Container>
        {/* <ButtonContainer>
          {!editContact && (
            <IconButton
              disabled={isLoading}
              btnType={iconBtnType.delete}
              width={44}
              height={35}
              onBtnClick={() => {
                setContactId(id);
              }}
            >
              <AiOutlineDelete />
            </IconButton>
          )}
          <IconButton
            btnType={iconBtnType.edit}
            width={44}
            height={35}
            onBtnClick={handleEditBtnClick}
          >
            <CiEdit />
          </IconButton>
        </ButtonContainer> */}
        {editContact ? (
          <ContactModalForm>
            <EditForm setEditContact={setEditState} />
          </ContactModalForm>
        ) : (
          <ContactInfo />
        )}
      </Container>
    </>
  );
};

export default ContactDetails;