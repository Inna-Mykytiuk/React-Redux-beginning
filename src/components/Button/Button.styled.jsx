import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font-size: inherit;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#1976d2' : '#e2e5e8')};
  color: ${({ selected }) => (selected ? '#fff' : 'inherit')};

  &.isSelected {
    background-color: #1976d2;
    color: #fff;
  }

  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
`;
