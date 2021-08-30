import React from "react"
import {
  AvatarBody,
  AvatarContent,
  AvatarImage,
  AvatarSection,
  AvatarText,
  AvatarTitle,
  AvatarWrapper,
} from "./style/avatars"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Avatars = () => {
  const intl = useIntl()
  const cards = new Array(2).fill(null)

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
    return cards.map((bio, i) => {
      const image = getImage(avatarImages[i].node)
      return (
        <AvatarWrapper key={i}>
          <AvatarImage>
            <GatsbyImage
              image={image}
              alt={intl.formatMessage({
                id: `aboutPage.bios.${i}.name`,
              })}
            />
          </AvatarImage>
          <AvatarBody>
            <AvatarTitle>
              <FormattedMessage id={`aboutPage.bios.${i}.name`} />
            </AvatarTitle>
            <AvatarText>
              <FormattedMessage id={`aboutPage.bios.${i}.body`} />
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
