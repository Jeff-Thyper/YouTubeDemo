import * as React from "react";
import styled from "styled-components";

const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd350738c6091d790caab582080831678b28e0cc6bee31dacc4baa4410b12733?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", ratio: 1.31, width: 21 },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df6613983fd88dfa815536a1fd185c654867cbb34b9cc30e95e045aeb5dbbf9c?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", ratio: 1, width: 24 },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/79476f3353adc4f506b620f1f0b11bd06c15084cc2250cd436b86ffc73071255?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", ratio: 1, width: 33 }
];

export function IconGroup() {
    return (
        <IconContainer>
            {icons.map((icon, index) => (
                <NavIcon
                    key={index}
                    loading="lazy"
                    src={icon.src}
                    $ratio={icon.ratio}
                    $width={icon.width}
                    alt={`Navigation icon ${index + 1}`}
                />
            ))}
        </IconContainer>
    );
}

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: auto 0;
`;

const NavIcon = styled.img`
  aspect-ratio: ${props => props.$ratio};
  object-fit: contain;
  object-position: center;
  width: ${props => props.$width}px;
  align-self: stretch;
  margin: auto 0;
`;