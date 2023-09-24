import styled from 'styled-components/native';

export const Item = styled.View`
  flex: 1;
  flex-direction: row;
  height: 100px;
  /* position: relative; */
  /* align-items: center; */
  /* border-radius: 10px; */
  border: 0.5px solid rgba(137, 137, 137, 0.43);
  /* transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  /* & a { */
  padding: ${({ theme }) => theme.spacing * 3}px;
  /* display: flex; */
  /* gap: ${({ theme }) => theme.primaryGap}px; */
  /* text-decoration: none; */
  /* color: black; */
  /* } */
`;

export const Image = styled.Image`
  width: 70px;
  height: 100%;
  object-fit: contain;
`;

export const ContactInfo = styled.View`
  /* display: flex; */
  /* width: 100%; */
  justify-content: space-between;
  /* gap: ${({ theme }) => theme.primaryGap}px; */
  /* align-items: center; */
  /* & div { */
  /* flex-basis: calc((100% - ${({ theme }) => theme.primaryGap}*2px) / 3); */
  /* } */
`;

export const Person = styled.View``;

export const Name = styled.Text`
  /* color: ${({ theme }) => theme.primaryFontColor}; */
  /* font-family: Inter; */
  /* font-size: 20px; */
  /* font-weight: ${({ theme }) => theme.secondaryFontWeight}; */
  /* text-align: center; */
`;

export const Role = styled.Text`
  /* color: #636363; */
  /* font-family: Inter; */
  /* font-size: ${({ theme }) => theme.primaryFontSize}px; */
  /* font-weight: ${({ theme }) => theme.primaryFontWeight}; */
  /* text-align: center; */
`;

export const Phone = styled.Text`
  /* color: ${({ theme }) => theme.primaryFontColor}; */
  /* font-family: Inter; */
  /* font-size: ${({ theme }) => theme.secondaryFontSize}px; */
  /* font-weight: ${({ theme }) => theme.primaryFontWeight}; */
  /* text-align: center; */
`;

export const Email = styled.View`
  /* color: #696969; */
  /* font-family: Inter; */
  /* font-size: ${({ theme }) => theme.secondaryFontSize}px; */
  /* font-weight: ${({ theme }) => theme.secondaryFontWeight}; */
  /* text-align: center; */
`;
