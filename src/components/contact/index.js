import React, { useContext } from "react"
import {
  Subtitle,
  Link,
  Title,
  Body,
  Content,
  Image,
  Main,
  Wrapper,
} from "./styles/contact"
import ContactSVG from "../../assets/svg/contactSVG"
import EmailForm from "./form"
import { Text, LanguageContext } from "../../context/languageContext"

const Contact = () => {
  const { dictionary } = useContext(LanguageContext)
  return (
    <Wrapper>
      <Main>
        <Image>
          <ContactSVG />
        </Image>
        <Content>
          <Title>
            <Text tid={dictionary.ContactPage.title} />
          </Title>
          <Body>
            <Text tid={dictionary.ContactPage.body} />
          </Body>
          <Subtitle>
            <Text tid={dictionary.ContactPage.subtile} />
          </Subtitle>
          <Link href={`tel:012346789`}>+0123456789</Link>
        </Content>
      </Main>
      <EmailForm />
    </Wrapper>
  )
}

export default Contact
