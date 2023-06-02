import React from "react"
import { HomeWrapper } from "./style"
import { JetHead } from "./jet-head/JetHead"
import { JetAbout } from "./jet-about/JetAbout"
import { JetCharacteristic } from "./jet-characteristic/JetCharacteristic"
import { JetChillerAbout } from "./Jet-chiller-about/JetChillerAbout"
import { OfficialSupplier } from "./jet-official-supplier/OfficialSupplier"
import { JetDelivery } from "./jet-delivery/JetDelivery"
import {SliderComp} from "../../common/componemts/slider/SliderComp";
import {JetSliderReviews} from "./jet-slider-reviews/JetSliderReviews";

export const Home = () => {
  return (
    <HomeWrapper>
      <JetHead />
      <JetAbout />
      <JetCharacteristic />
      <JetChillerAbout />
      <OfficialSupplier />
      <JetDelivery />
        {/*<JetSliderReviews/>*/}
      <SliderComp />
    </HomeWrapper>
  )
}
