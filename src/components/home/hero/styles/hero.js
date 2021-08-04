import styled, { keyframes } from "styled-components/macro"

const wobble = keyframes`
  0% {
    transform: rotateZ(0.5deg);
  }
  100% {
    transform: rotateZ(-0.5deg);
  }
`

const bouncing = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(5%);
  }
`

const rollingWheels = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const rollingRoad = keyframes`
  0% {
    transform: translateX(0%);
  }
   100% {
    transform: translateX(60%);
  }
`

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;
  position: relative;
  overflow-x: hidden;
`
export const HeroSection = styled.section`
  width: 90%;
  max-width: 1150px;
  max-height: 600px;
  min-height: 450px;
  margin: 0 auto;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeroContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  order: 1;
  z-index: 2;
  @media (max-width: 750px) {
    width: 60%;
  }
  @media (max-width: 650px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 250px;
  max-width: 275px;
  width: 50%;
  justify-content: space-evenly;
  @media (min-width: 750px) {
    margin: 0;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: 150px;
  }
`

export const HeroTitle = styled.h1`
  ${props => props.theme.text.h1}
  color: ${props => props.theme.color.dark};
`
export const HeroSubTitle = styled.h2`
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.dark};
  width: 85%;
  @media (max-width: 750px) {
    width: 100%;
  }
`
export const HeroAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeroAddressText = styled.h3`
  ${props => props.theme.text.h4}
  color: ${props => props.theme.color.text};
  width: 85%;
  @media (max-width: 750px) {
    width: 100%;
  }
`

export const Background = styled.div`
  position: absolute;
  overflow: hidden;
  left: 100px;
  top: 25%;
  & svg {
    & #cloud-top,
    #cloud-middle,
    #cloud-bottom {
      transform-origin: center;
      transform-box: fill-box;
      animation: 2s ${bouncing} ease-in-out infinite alternate;
    }
  }
`

export const Road = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  right: 0px;
  & svg {
    & #road-lines {
      transform-origin: right;
      transform-box: fill-box;
      animation: 60s ${rollingRoad} linear infinite;
    }
    & #foreground {
      transform-origin: right;
      transform-box: fill-box;
      animation: 90s ${rollingRoad} linear infinite;
    }
  }
`
export const Van = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 120px;
  right: -120px;
  & svg {
    & #chassis {
      transform-origin: center;
      transform-box: fill-box;
      animation: 2s ${wobble} ease-in-out infinite alternate;
    }
    & #front-wheel,
    #rear-wheel {
      transform-origin: center;
      transform-box: fill-box;
      animation: 20s ${rollingWheels} linear infinite alternate;
    }
  }
`
