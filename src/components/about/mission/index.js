import React, { useContext } from "react"
import {
  Body,
  Mission,
  MissionContent,
  MissionSection,
  Subtile,
} from "./style/text"
import { Text, LanguageContext } from "../../../context/languageContext"

const MissionArticle = () => {
  const { dictionary } = useContext(LanguageContext)

  const renderMission = () => {
    return dictionary.aboutPage.mission.map((mission, i) => (
      <Mission key={i}>
        <Subtile>
          <Text tid={mission.title} />
        </Subtile>
        <Body>
          <Text tid={mission.body} />
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
