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
    transform: translateX(50%);
  }
`

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;
  justify-content: center;
  overflow: hidden;
`
export const HeroSection = styled.section`
  width: 100%;
  max-width: 1150px;
  max-height: 600px;
  min-height: 450px;
  padding: 0 10%;
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
  z-index: 2;
  @media (min-width: 750px) {
    width: 60%;
  }
  @media (min-width: 650px) {
    width: 70%;
  }
  @media (min-width: 600px) {
    width: 80%;
  }
`

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 250px;
  max-width: 350px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin: 0;
    flex-direction: column;
    height: 150px;
    justify-content: space-evenly;
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
  order: 2;
  position: relative;
  width: 100%;
  & svg {
    width: 500px;
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    right: 0;

    @media (min-width: 750px) {
      height: auto;
      transform: translateY(-60%);
      left: 0;
    }
    @media (min-width: 1000px) {
      width: 750px;
      transform: translateY(-50%);
      left: 0;
    }

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
    & #road {
      & #road-lines {
        transform-origin: right;
        transform-box: fill-box;
        animation: 80s ${rollingRoad} linear infinite;
      }
      & #foreground {
        transform-origin: right;
        transform-box: fill-box;
        animation: 120s ${rollingRoad} linear infinite;
      }

      & #van {
        transform: translate(5%);
        @media (min-width: 750px) {
          transform: translate(0%);
        }
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
        @media (min-width: 750px) {
          right: 15%;
        }
      }
    }
  }
`
