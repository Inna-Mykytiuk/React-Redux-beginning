import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  color: rgb(255, 255, 255);
  backdrop-filter: blur(20px);
  background-color: #5a48483b;
  padding: 20px 30px;
  border-radius: 10px;
`;

export const Section = styled.section`
  display: grid;
  gap: 4px;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 0;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
`;
