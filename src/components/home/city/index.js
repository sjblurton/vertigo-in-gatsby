import React from "react"
import BoulderMan from "../../../assets/svg/boulderMan"

import { Body, Context, Title, Wrapper } from "./styles/city"

const CityInfo = () => {
  return (
    <Wrapper>
      <BoulderMan />
      <Context>
        <Title>San Cristóbal De Las Casas</Title>
        <Body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          molestias veniam ipsa impedit esse, eveniet dolor illum ex qui autem
          nostrum earum tempora laudantium obcaecati nemo distinctio modi
          facilis deleniti.
        </Body>
        <Body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          molestias veniam ipsa impedit esse, eveniet dolor illum ex qui autem
          nostrum earum tempora laudantium obcaecati nemo distinctio modi
          facilis deleniti.
        </Body>
      </Context>
    </Wrapper>
  )
}

export default CityInfo
