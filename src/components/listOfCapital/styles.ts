import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100rem;
  width: 100%;
  margin-top: 5rem;

`;



export const Line = styled.div`
max-width: 60rem;
  width: 100%;
  height: 1px;
  background-color: ${({ theme}) => theme.colors.text};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 50rem;
  //background-color: red;
  padding: 2rem 0 0 1rem;
  

  span {
    margin-right: auto;
    font-size: 2rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Cities = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 45rem;
  color: ${({ theme }) => theme.colors.secondary};
  //background-color: red;
`;

export const Capitals = styled.div`
  display: grid;
  justify-content: space-between;
  //background: ${({ theme }) => theme.colors.background};
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: 50% 50%;
  grid-auto-rows: 1rem;
  gap: 1rem;

    @media (max-width: 497px) {
      grid-template-columns: repeat(1, 1fr);
    }
`;

export const Titles = styled.div`
    display: flex;
    width: 65%;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.gray_400};
`;

export const Title1 = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Title2 = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 628px) {
      visibility: hidden;
    }
`;

interface CapitalComponentProps {
  variant: number;
}

export const CapitalContent = styled.div<CapitalComponentProps>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  font-weight: 900;
  color: ${({ theme, variant }) => variant === 1 ? theme.colors.list : theme.colors.text};

`;

export const MaxMin = styled.div`
  display: flex;
  width: 7.5rem;
  gap: 0.5rem;
`;

export const CapitalName = styled.div`
  display: flex;
  left: 0;
`;