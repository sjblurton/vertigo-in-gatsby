import React from "react"
import Button from "../button"
import { Link } from "gatsby"
import {
  Body,
  ButtonContainer,
  Header,
  Image,
  Title,
  Wrapper,
  Content,
  Text,
} from "./styles/card"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Card = ({ image, title, body, button1, to }) => {
  console.log(image)
  const cardImage = getImage(image)
  console.log(cardImage)
  return (
    <Wrapper>
      <Image>
        <GatsbyImage image={cardImage} alt="title" />
      </Image>
      <Body>
        <Content>
          <Header>
            <Title>{title}</Title>
          </Header>
          <Text dangerouslySetInnerHTML={{ __html: body }}></Text>
        </Content>
        <ButtonContainer>
          {to && (
            <Link to={to}>
              <Button variant="outline">{button1}</Button>
            </Link>
          )}
        </ButtonContainer>
      </Body>
    </Wrapper>
  )
}

export default Card
