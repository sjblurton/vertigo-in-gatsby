import styled from "styled-components/macro"

export const Section = styled.section`
  padding: 60px 10%;
  width: 100%;
  max-width: 1150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h1`
  ${props => props.theme.text.h1}
  color: ${props => props.theme.color.dark};
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
