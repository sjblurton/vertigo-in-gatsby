import styled from "styled-components/macro"

export const AvatarSection = styled.section`
  width: 100%;
  padding: 32px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AvatarContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 600px;
  }
`
export const AvatarWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 230px;
`
export const AvatarImage = styled.div`
  position: absolute;
  top: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  right: 50%;
  transform: translateX(50%);
  z-index: 1;
  & img {
    width: 100%;
    border-radius: 50%;
  }
`
export const AvatarBody = styled.div`
  position: absolute;
  width: 100%;
  height: 160px;
  background-color: ${props => props.theme.color.white};
  border-radius: 100px 100px 0 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 5%;
`
export const AvatarTitle = styled.h4`
  ${props => props.theme.text.bold};
  color: ${props => props.theme.color.dark};
  text-align: center;
  padding-bottom: 5%;
  text-transform: capitalize;
`
export const AvatarText = styled.p`
  ${props => props.theme.text.small};
  color: ${props => props.theme.color.text};
`
