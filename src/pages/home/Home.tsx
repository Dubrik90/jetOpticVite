import React from "react"
import { HomeWrapper } from "./style"
import { JetHead } from "./jet-head/JetHead"
import { JetAbout } from "./jet-about/JetAbout"
import {JetCharacteristic} from "./jet-characteristic/JetCharacteristic";

export const Home = () => {
  return (
    <HomeWrapper>
      <JetHead />
      <JetAbout />
      <JetCharacteristic />
    </HomeWrapper>
  )
}
