import styled from "styled-components/macro"

export const Wrapper = styled.section`
  padding-top: 80px;
  min-height: calc(100vh - 60px);
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`
export const Image = styled.div`
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  & svg {
    height: auto;
    width: 100%;
  }
`
export const Content = styled.article`
  order: 1;
  padding: 24px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  margin-bottom: 16px;
  ${props => props.theme.text.h2};
  color: ${props => props.theme.color.dark};
`
export const Subtitle = styled.h3`
  margin-top: 32px;
  ${props => props.theme.text.h3};
  color: ${props => props.theme.color.dark};
`
export const Body = styled.p`
  ${props => props.theme.text.body};
  color: ${props => props.theme.color.text};
  max-width: 400px;
`
export const Link = styled.a`
  ${props => props.theme.text.h3};
  color: ${props => props.theme.color.primary};
  text-transform: lowercase;
`
