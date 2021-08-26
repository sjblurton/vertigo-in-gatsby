import React, { useContext } from "react"
import {
  AvatarBody,
  AvatarContent,
  AvatarImage,
  AvatarSection,
  AvatarText,
  AvatarTitle,
  AvatarWrapper,
} from "./style/avatars"
import { Text, LanguageContext } from "../../../context/languageContext"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Avatars = () => {
  const { dictionary } = useContext(LanguageContext)

  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(
              width: 100
              height: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            parent {
              ... on File {
                id
                name
                relativePath
              }
            }
          }
        }
      }
    }
  `)

  const regexAvatar = /^avatars\//i
  const avatarImages = data.allImageSharp.edges.filter(value =>
    regexAvatar.test(value.node.parent.relativePath)
  )

  const renderBios = () => {
    return dictionary.aboutPage.bios.map((bio, i) => {
      const image = getImage(avatarImages[i].node)
      return (
        <AvatarWrapper key={i}>
          <AvatarImage>
            <GatsbyImage image={image} alt={bio.name} />
          </AvatarImage>
          <AvatarBody>
            <AvatarTitle>
              <Text tid={bio.name} />
            </AvatarTitle>
            <AvatarText>
              <Text tid={bio.body} />
            </AvatarText>
          </AvatarBody>
        </AvatarWrapper>
      )
    })
  }

  return (
    <AvatarSection>
      <AvatarContent>{renderBios()}</AvatarContent>
    </AvatarSection>
  )
}

export default Avatars
