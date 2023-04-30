import styled from 'styled-components';

export const AppWrapper = styled.div`
  /* width: 80%; */
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 40px;
`;
export const AppWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  /* color: rgb(24 13 13); */
  color: #fff;
  backdrop-filter: blur(30px);
  background-color: #5a48483b;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;

  padding: 20px 30px;
  border-radius: 10px;
`;

export const TextReportB = styled.div`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;

  /* color: red; */
  /* color: rgb(64, 69, 72); */
  color: #fff;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export const TextReportG = styled.div`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;

  color: rgb(64, 69, 72);
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: rgb(43, 46, 48);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.8;
  font-size: 16px;
  font-weight: 700;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;

  margin-bottom: 30px;

  &:hover,
  &:focus {
    opacity: 1;
    color: #fff;
  }

  &:active {
    scale: 0.95;
  }
`;
