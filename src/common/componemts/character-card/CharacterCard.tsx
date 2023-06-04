import React, { FC } from "react"
import { CharacterCardWrapper } from "./style"

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
