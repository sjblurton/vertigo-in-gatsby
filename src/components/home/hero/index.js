import React, { useContext } from "react"
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
  Van,
} from "./styles/hero"
import { Text, LanguageContext } from "../../../context/languageContext"
import { Button } from "../../../shared"
import { ROUTES } from "../../../data/routes"
import HeroBackground from "../../../assets/svg/heroBackground"
import HeroRoad from "../../../assets/svg/heroRoad"
import HeroVan from "../../../assets/svg/heroVan"

const Hero = () => {
  const { dictionary } = useContext(LanguageContext)
  return (
    <HeroContainer>
      <Background>
        <HeroBackground />
      </Background>
      <Road>
        <HeroRoad />
      </Road>
      <Van>
        <HeroVan />
      </Van>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            <Text tid={dictionary.homePage.hero.title} />
          </HeroTitle>
          <HeroSubTitle>
            <Text tid={dictionary.homePage.hero.subtitle} />
          </HeroSubTitle>
          <HeroAddressContainer>
            <HeroAddressText>
              <Text tid={dictionary.homePage.hero.city} />
            </HeroAddressText>
            <HeroAddressText>
              <Text tid={dictionary.homePage.hero.state} />
            </HeroAddressText>
            <HeroAddressText>
              <Text tid={dictionary.homePage.hero.country} />
            </HeroAddressText>
          </HeroAddressContainer>
          <HeroButtons>
            <Button to={ROUTES.CONTACT}>
              <Text tid={dictionary.homePage.hero.bookButton} />
            </Button>

            <a href="/#installation">
              <Button variant="outline">
                <Text tid={dictionary.homePage.hero.climbingButton} />
              </Button>
            </a>
          </HeroButtons>
        </HeroContent>
      </HeroSection>
    </HeroContainer>
  )
}

export default Hero
