import styled from "styled-components/macro"

export const Wrapper = styled.section`
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.secondary};
  flex-direction: column;

  & svg {
    max-width: 500px;
    align-self: flex-start;
    width: 100%;
    height: auto;
    max-width: 500px;
  }
`
export const Context = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const Title = styled.h2`
  margin-top: 16px;
  ${props => props.theme.text.h2}
  color: ${props => props.theme.color.white};
`
export const SubTitle = styled.h3`
  margin-top: 16px;
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.white};
`
export const Body = styled.p`
  margin-top: 8px;
  margin-right: 16px;
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.white};
`
