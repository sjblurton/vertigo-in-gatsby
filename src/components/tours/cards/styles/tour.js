import styled from "styled-components/macro"

export const Section = styled.section`
  padding: 60px 8px 16px 8px;
  width: 100%;
  max-width: 1150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
  min-height: 925px;
  @media (max-width: 825px) {
    align-content: space-between;
  }
  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    height: 1800px;
  }
`
