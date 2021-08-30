import styled from "styled-components/macro"
import { Link } from "gatsby-plugin-intl"

export const GoBack = styled(Link)`
  position: absolute;
  top: clamp(8px, 5%, 32px);
  left: clamp(8px, 5%, 32px);
  z-index: 2;
  width: 30px;
  height: 30px;

  & svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.color.accent};
  }
`

export const Wrapper = styled.section`
  padding-top: 60px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`
export const Header = styled.header`
  position: relative;
  height: 100%;
  width: 100%;
  max-height: 400px;
  overflow-y: hidden;
  align-self: flex-start;
`

export const TitleDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`
export const TitleText = styled.h1`
  text-align: center;
  ${props => props.theme.text.h1}
  color: ${props => props.theme.color.accent};
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`
export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: clamp(8px, 5%, 32px);
  max-width: 600px;
`
export const Subtitle = styled.h2`
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.dark};
`
export const Body = styled.p`
  margin-top: 8px;
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.dark};
`
