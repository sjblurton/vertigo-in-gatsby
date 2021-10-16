import styled from "styled-components/macro"

export const Wrapper = styled.section`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  & svg {
    position: absolute;
    width: 90%;
    height: auto;
    max-width: 300px;
    position: absolute;
    top: 0;
    left: 0;
    @media (min-width: 1100px) {
      max-width: 600px;
      width: 27%;
    }
  }
`
export const Context = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 2;
  margin-block: 5%;
  @media (max-width: 1100px) {
    margin-top: 400px;
  }
`
export const Title = styled.h1`
  margin-top: 16px;
  color: ${props => props.theme.color.dark};
`
export const SubTitle = styled.h2`
  margin-top: 16px;
  color: ${props => props.theme.color.dark};
`
export const Body = styled.p`
  margin-top: 8px;
  margin-right: 16px;
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
  @media (max-width: 825px) {
    height: 900px;
    align-content: space-between;
  }
  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 1350px;
    align-content: center;
  }
`
