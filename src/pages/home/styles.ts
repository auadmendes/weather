import styled from "styled-components";
import sunBackground from '../../assets/sun.svg';
import nightBackground from '../../assets/night.svg';


interface ContainerProps {
  variant: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-image: ${({ variant }) => variant === 1 ? `url(${sunBackground})` : 
  `url(${nightBackground})`};
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;

  /* @media (max-width: 771px) {
      height: 100vh;
    } */
`;

export const Title = styled.div`
  padding: 0, 2rem 0 2rem;
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchBar = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  max-width: 30rem;
  width: 100%;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.text};

      input {
        border: 0;
        display: flex;
        padding: 1rem;
        width: 100%;
        outline: none;
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1.25rem;
      }

      svg {
        color: ${({ theme }) => theme.colors.secondary};
        height: 2rem;
        width: 2rem;
      }

`;