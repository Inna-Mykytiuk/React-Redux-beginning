import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
`;
export const Field = styled.input`
  width: 100%;
  background-color: transparent;

  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  &:focus-within {
    box-shadow: 0 3px 15px rgb(43, 46, 48);
    border-radius: 5px;
    color: #fff;
  }

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;
