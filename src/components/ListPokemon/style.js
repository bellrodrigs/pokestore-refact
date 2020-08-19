import styled from 'styled-components'

export const Card = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px 15px 0px;
  width: 100%;
`;

export const CardTitle = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 25px;
  margin: 0px 0px 15px 0px
`;

export const CardImage = styled.img`
  width: 6rem;
  margin: 0px 0px 15px 0px;
`;

export const CardButton = styled.button`
  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text};
  width: 70%;
  height: 35px;
`;