import React from "react"
import styled from "styled-components"

const StyledSVG = styled.svg`
  /* Добавьте здесь стили для SVG */
`

interface MySVGProps {
  src: string
  width?: string
  height?: string
  className?: string
}

export const SvgComponent: React.FC<MySVGProps> = ({
  src,
  width,
  height,
  className,
}) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
    >
      <image xlinkHref={src} width="100%" height="100%" />
    </StyledSVG>
  )
}
