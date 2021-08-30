import React from "react"
import {
  Body,
  Mission,
  MissionContent,
  MissionSection,
  Subtile,
} from "./style/text"
import { FormattedMessage } from "gatsby-plugin-intl"

const MissionArticle = () => {
  const info = new Array(4).fill(null)

  const renderMission = () => {
    return info.map((mission, i) => (
      <Mission key={i}>
        <Subtile>
          <FormattedMessage id={`aboutPage.mission.${i}.title`} />
        </Subtile>
        <Body>
          <FormattedMessage id={`aboutPage.mission.${i}.body`} />
        </Body>
      </Mission>
    ))
  }

  return (
    <MissionSection>
      <MissionContent>{renderMission()}</MissionContent>
    </MissionSection>
  )
}

export default MissionArticle
