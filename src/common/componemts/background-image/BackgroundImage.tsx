import React from "react"
import styled from "styled-components"

interface BackgroundProps {
  imageUrl: string
}

export const BackgroundImage: React.FC<BackgroundProps> = ({
  imageUrl,
  children,
}) => {
  return <StyledBackground imageUrl={imageUrl}>{children}</StyledBackground>
}

const StyledBackground = styled.div<{ imageUrl: string }>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`
