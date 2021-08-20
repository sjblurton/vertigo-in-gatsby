import styled from "styled-components/macro"

export const Wrapper = styled.section`
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const Context = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: clamp(4px, 2.5vw, 32px);
`
export const Title = styled.h3`
  margin-top: 16px;
  ${props => props.theme.text.h2}
  color: ${props => props.theme.color.dark};
`
export const Body = styled.p`
  margin-top: 8px;
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.dark};
`
