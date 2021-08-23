import styled from "styled-components/macro"

export const Section = styled.section`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.secondary};
  border-radius: 10px;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  &:first-child {
    margin-top: 0;
    margin-left: 0px;
  }
  @media (min-width: 750px) {
    margin-top: 0;
    margin-left: 16px;
  }
`
export const Title = styled.h3`
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.white};
`
export const Body = styled.p`
  margin-top: 8px;
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.white};
  max-width: 275px;
`
