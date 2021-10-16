import styled from "styled-components/macro"
import BackgroundImage from "gatsby-background-image"

export const Wrapper = styled(BackgroundImage)`
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.secondary};
  flex-direction: column;
  background-position: bottom right;
  background-size: contain;
  &:after {
    opacity: 0.4 !important;
    @media (max-width: 600px) {
      background-size: cover !important;
      opacity: 0.2 !important;
    }
    @media (min-width: 1400px) {
      opacity: 0.6 !important;
    }
  }
`

export const Context = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-block: clamp(10px, 5%, 50px);
`

export const Title = styled.h1`
  margin-top: 16px;
  color: ${props => props.theme.color.white};
`
export const SubTitle = styled.h2`
  margin-top: 16px;
  color: ${props => props.theme.color.white};
`

export const Body = styled.p`
  margin-top: 8px;
  margin-right: 16px;
  color: ${props => props.theme.color.white};
`
