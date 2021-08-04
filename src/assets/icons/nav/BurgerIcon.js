import React from "react"

function BurgerIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="37"
      fill="none"
      viewBox="0 0 40 37"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M2.5 2.5L37.5 2.5"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M2.5 18.5L37.5 18.5"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M2.5 34.5L37.5 34.5"
      ></path>
    </svg>
  )
}

export default BurgerIcon
