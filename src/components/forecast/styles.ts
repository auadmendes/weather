import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 30rem;
  padding: 1rem 1rem; 
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.secondary};

  /* @media (max-width: 600px) {
       max-width: 100%;
    } */
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray_800};

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 1rem;
  width: 100%;
  
    div {
      display: flex;
      gap: 0.5rem;
      font-weight: 600;
    }

    h4 {
      cursor: pointer;
    }

`;

export const Content = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  gap: 2rem;

  @media (max-width: 300px) {
      flex-direction: column;
      //align-items: center;
    }

`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Temperatures = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  svg {
    margin-right: 0.2rem;
  }
`;

export const DayTemperatures = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    display: flex;
    font-size: 0.785rem;
  }

  svg {
    margin-right: 0.2rem;
  }
`;

export const Sensation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ForecastContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  margin-top: 1rem; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;

  

  /* @media (max-width: 300px) {
      flex-direction: column;
      //align-items: center;
    } */
`;
export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export const DayName = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray_800};
`;

