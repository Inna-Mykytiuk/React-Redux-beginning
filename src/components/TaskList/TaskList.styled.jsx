import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  &:not(:first-child) {
    border-top: 1px solid #2f2f37;
  }
`;
