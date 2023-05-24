import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const StyledSVG = styled(ReactSVG)`
  /* Добавьте здесь стили для SVG */
`;

interface MySVGProps {
    src: string;
    width?: string;
    height?: string;
    className?: string;
}

export const SvgComponent: React.FC<MySVGProps> = ({ src, width, height, className }) => {
    return (
        <StyledSVG
            src={src}
            beforeInjection={(svg) => {
                // Настраиваем SVG перед вставкой
                const viewBox = svg.getAttribute('viewBox');
                if (viewBox) {
                    svg.setAttribute('viewBox', viewBox);
                }
            }}
            wrapper="span"
            width={width}
            height={height}
            className={className}
        />
    );
};

