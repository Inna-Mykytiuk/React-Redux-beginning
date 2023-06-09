import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 18px;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const Img = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: 0.5s ease-in-out;

  margin: 10px 0;
`;
