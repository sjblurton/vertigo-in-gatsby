import React from "react"
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
import { FormattedMessage } from "gatsby-plugin-intl"

const Contact = () => {
  return (
    <Wrapper>
      <Main>
        <Image>
          <ContactSVG />
        </Image>
        <Content>
          <Title>
            <FormattedMessage id={`ContactPage.title`} />
          </Title>
          <Body>
            <FormattedMessage id={`ContactPage.body`} />
          </Body>
          <Subtitle>
            <FormattedMessage id={`ContactPage.subtile`} />
          </Subtitle>
          <Link href={`tel:012346789`}>+0123456789</Link>
        </Content>
      </Main>
      <EmailForm />
    </Wrapper>
  )
}

export default Contact
