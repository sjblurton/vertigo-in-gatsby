import React from "react"
import styled, { keyframes } from "styled-components/macro"

function RoadLines() {
  return (
    <RoadLinesSVG
      xmlns="http://www.w3.org/2000/svg"
      width="4510"
      height="12"
      fill="none"
      viewBox="0 0 4510 12"
    >
      <path fill="#EEF1EF" d="M0.201 0.561H442.288V11.808H0.201z"></path>
      <path fill="#EEF1EF" d="M1017 0.561H1459.087V11.808H1017z"></path>
      <path
        fill="#EEF1EF"
        d="M2033.8 0.561H2475.8869999999997V11.808H2033.8z"
      ></path>
      <path fill="#EEF1EF" d="M3050.6 0.561H3492.687V11.808H3050.6z"></path>
      <path fill="#EEF1EF" d="M4067.4 0.561H4509.487V11.808H4067.4z"></path>
    </RoadLinesSVG>
  )
}

export default RoadLines

const rollingRoad = keyframes`
  0% {
    transform: translateX(0%);
  }
   100% {
    transform: translateX(25%);
  }
`

const RoadLinesSVG = styled.svg`
  position: absolute;
  z-index: 20;
  bottom: 120px;
  transform-origin: right;
  transform-box: fill-box;
  animation: 80s ${rollingRoad} linear infinite;
`
