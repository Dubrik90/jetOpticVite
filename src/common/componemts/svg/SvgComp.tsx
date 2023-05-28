import React from "react";
import { ReactSVG } from "vite-plugin-react-svg";
import styled from "@emotion/styled";

const StyledSvg = styled(ReactSVG)`
  /* Добавьте стили для SVG по вашему выбору */
`;

interface SvgCompProps {
  src: string;
  className?: string;
}

const SvgComp: React.FC<SvgCompProps> = ({ src, className }) => {
  return <StyledSvg src={src} className={className} />;
};

export default SvgComp;