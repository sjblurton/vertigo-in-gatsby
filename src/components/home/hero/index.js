import React from "react"
import {
  HeroSection,
  HeroTitle,
  HeroContent,
  HeroContainer,
  HeroSubTitle,
  HeroButtons,
  HeroAddressText,
  HeroAddressContainer,
  Background,
  Road,
} from "./styles/hero"
import { Button } from "../../../shared"
import { ROUTES } from "../../../data/routes"
import HeroBackground from "../../../assets/svg/heroBackground"
import HeroRoad from "../../../assets/svg/heroRoad"
import { FormattedMessage } from "gatsby-plugin-intl"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSection>
        <Background>
          <HeroBackground />
        </Background>
        <HeroContent>
          <HeroTitle>
            <FormattedMessage id="homePage.hero.title" />
          </HeroTitle>
          <HeroSubTitle>
            <FormattedMessage id="homePage.hero.subtitle" />
          </HeroSubTitle>
          <HeroAddressContainer>
            <HeroAddressText>
              <FormattedMessage id="homePage.hero.city" />
            </HeroAddressText>
            <HeroAddressText>
              <FormattedMessage id="homePage.hero.state" />
            </HeroAddressText>
            <HeroAddressText>
              <FormattedMessage id="homePage.hero.country" />
            </HeroAddressText>
          </HeroAddressContainer>
          <HeroButtons>
            <Button to={ROUTES.CONTACT}>
              <FormattedMessage id="homePage.hero.bookButton" />
            </Button>
            <a href="/#climbing">
              <Button variant="outline">
                <FormattedMessage id="homePage.hero.climbingButton" />
              </Button>
            </a>
          </HeroButtons>
        </HeroContent>
      </HeroSection>
      <Road>
        <HeroRoad />
      </Road>
    </HeroContainer>
  )
}

export default Hero
