import styled from "styled-components/macro"

export const Section = styled.section`
  margin-inline: auto;
  padding: 80px 8px 16px 8px;
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
  color: ${props => props.theme.color.dark};
`

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 16px 0;
  width: 90%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 825px) {
    align-content: space-between;
    & article {
      margin-top: 16px;
    }
  }
  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    & article {
      margin-top: 16px;
    }
  }
`
