import styled from "styled-components/macro"
import { Link } from "gatsby-plugin-intl"

export const GoBack = styled(Link)`
  position: absolute;
  left: clamp(8px, 5%, 64px);
  z-index: 2;
  width: 50px;
  height: 50px;

  & svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.color.secondary};
  }
  @media (min-width: 750px) {
    display: none;
  }
`

export const Wrapper = styled.section`
  position: relative;
  padding-top: 120px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  max-width: 1400px;
  margin-inline: auto;
  @media (max-width: 750px) {
    min-height: 900px;
  }
`

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.color.dark};
`

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: clamp(8px, 5%, 32px);
  @media (min-width: 750px) {
    width: 60%;
    padding-left: 10%;
  }
`

export const Body = styled.p`
  margin-top: 8px;
  max-width: 500px;
  color: ${props => props.theme.color.dark};
  &:last-of-type {
    margin-bottom: 16px;
  }
  &:first-of-type {
    margin-top: 16px;
  }
`

export const Price = styled.h3`
  margin-bottom: 8px;
  color: ${props => props.theme.color.dark};
`
export const SmallText = styled.p`
  ${props => props.theme.text.small}
  color: ${props => props.theme.color.dark};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Image = styled.div`
  position: absolute;
  bottom: -10%;
  right: -10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  z-index: -2;

  @media (min-width: 1000px) {
    bottom: 0%;
    right: 0%;
  }
  @media (min-width: 1100px) {
    bottom: 10%;
    right: 10%;
  }
`
export const ImageCover = styled.div`
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  @media (min-width: 1000px) {
    background: none;
  }
`
