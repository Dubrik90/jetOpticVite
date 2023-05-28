import React, { FC } from "react"
import { CharacterCardWrapper } from "./style"
import {SvgComponent} from "../svg-component/SvgComponent";

type CharacterCardProps = {
  img: string
  title: string
  subTitle: string
}

export const CharacterCard: FC<CharacterCardProps> = ({
  img,
  subTitle,
  title,
}) => {
  return (
      <CharacterCardWrapper>
        {/*<SvgComponent src={img} />*/}

      </CharacterCardWrapper>
  )
}
