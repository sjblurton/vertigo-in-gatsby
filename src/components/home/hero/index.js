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
  RoadContainer,
} from "./styles/hero"
import { Button } from "../../../shared"
import { ROUTES } from "../../../data/routes"
import HeroBackground from "../../../assets/svg/heroBackground"
import { FormattedMessage } from "gatsby-plugin-intl"
import Road from "../../../assets/svg/road"
import RoadLines from "../../../assets/svg/roadLines"
import Van from "../../../assets/svg/van"
import Foreground from "../../../assets/svg/foreground"

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
            <Button variant="outline" href="#climbing">
              <FormattedMessage id="homePage.hero.climbingButton" />
            </Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>
      <RoadContainer>
        <Van />
        <Road />
        <RoadLines />
        <Foreground />
      </RoadContainer>
    </HeroContainer>
  )
}

export default Hero
