import styled from "styled-components/macro"

export const Wrapper = styled.section`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
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
`
export const Title = styled.h2`
  margin-top: 16px;
  ${props => props.theme.text.h2}
  color: ${props => props.theme.color.dark};
`
export const SubTitle = styled.h3`
  margin-top: 16px;
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.dark};
`
export const Body = styled.p`
  margin-top: 8px;
  margin-right: 16px;
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.text};
`
export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 16px 0;
  width: 90%;
  max-width: 800px;
  @media (max-width: 600px) {
    justify-content: center;
    height: 1350px;
  }
`
