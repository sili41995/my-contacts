import defaultUserAvatar from 'images/default-user-avatar.jpg';
import defaultContactAvatar from 'images/default-contact-avatar.jpg';

export const getUserAvatar = (avatar) => (avatar ? avatar : defaultUserAvatar);

export const getContactAvatar = (avatar) =>
  avatar ? avatar : defaultContactAvatar;
