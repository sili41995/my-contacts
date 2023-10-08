import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  gap: ${({ theme }) => theme.primaryGap}px;
  justify-content: space-between;
`;
