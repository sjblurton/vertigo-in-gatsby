import styled from "styled-components/macro"

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 240px;
  height: 420px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: ${props => props.theme.light};
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.1);
`
export const Image = styled.div`
  width: 100%;
  height: 190px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0px 0px;
  background: url(${props => props.image}),
    linear-gradient(0deg, #ffffff, #ffffff);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & img {
    width: 100%;
  }
  @media (max-width: 1100px) {
    height: 265px;
  }
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 10px;
  align-self: stretch;
  height: 100%;
  background-color: ${props => props.theme.color.white};
  border-radius: 0 0 8px 8px;
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  flex-wrap: wrap;
`

export const Title = styled.h3`
  color: ${props => props.theme.color.dark};
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Text = styled.p`
  color: ${props => props.theme.color.text};
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 50%;
`
