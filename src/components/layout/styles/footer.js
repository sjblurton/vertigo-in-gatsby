import styled from "styled-components/macro"

export const Wrapper = styled.footer`
  background-color: ${props => props.theme.color.light};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0px;
  width: 100%;
  height: 60px;
  z-index: 999;
  @media (max-width: 750px) {
    padding: 0px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 0 16px;
`

export const SmallText = styled.p`
  ${props => props.theme.text.small};
  color: ${props => props.theme.color.subtle};
  text-transform: capitalize;
  & a {
    color: ${props => props.theme.color.subtle};
  }
`
