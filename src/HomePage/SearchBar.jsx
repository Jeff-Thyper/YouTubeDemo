import React from "react";
import styled from "styled-components";

function Head() {
    const navigationIcons = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd350738c6091d790caab582080831678b28e0cc6bee31dacc4baa4410b12733?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502",
            alt: "notifications",
            width: "21px",
            ratio: "1.31",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df6613983fd88dfa815536a1fd185c654867cbb34b9cc30e95e045aeb5dbbf9c?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502",
            alt: "messages",
            width: "24px",
            ratio: "1",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/79476f3353adc4f506b620f1f0b11bd06c15084cc2250cd436b86ffc73071255?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502",
            alt: "profile",
            width: "33px",
            ratio: "1",
        },
    ];

    return (
        <HeaderContainer>
            <NavContainer>
                <LogoSection>
                    <Logo
                        menuIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/b42fdc81fd503cb61cc9521ff44bc35e4f27f27a630378270d3b7a225259991c?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                        logoImage="https://cdn.builder.io/api/v1/image/assets/TEMP/dc24f76ff74c2070220a655642b6c8c0c177ae985967d55b4600176cce527e3f?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                    />
                </LogoSection>
                <SearchSection>
                    <SearchInput />
                    <NotificationIcon
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/232febee261919efdd74953e5edb7550aac631febb672796b3ce423abecb1f8b?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                        alt="notifications"
                    />
                </SearchSection>
                <IconSection>
                    {navigationIcons.map((icon, index) => (
                        <IconButton
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            width={icon.width}
                            aspectRatio={icon.ratio}
                        />
                    ))}
                </IconSection>
            </NavContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px 100px;
  flex-wrap: wrap;
`;

const LogoSection = styled.div`

  display: flex;
  gap: 28px;
  
`;

const SearchSection = styled.div`
  align-self: stretch;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const NotificationIcon = styled.img`
  aspect-ratio: 1.15;
  object-fit: contain;
  object-position: center;
  width: 60px;
`;

const IconSection = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 30px;
  margin: auto 0;
`;

function Logo({ menuIcon, logoImage }) {
    return (
        <>
            <MenuIcon loading="lazy" src={menuIcon} alt="menu" />
            <LogoImage loading="lazy" src={logoImage} alt="logo" />
        </>
    );
}

const MenuIcon = styled.img`
  aspect-ratio: 0.9;
  object-fit: contain;
  object-position: center;
  width: 18px;
  margin: auto 0;
`;

const LogoImage = styled.img`
  aspect-ratio: 3.29;
  object-fit: contain;
  object-position: center;
  width: 92px;
`;

function SearchInput() {
    return (
        <SearchContainer>
            <SearchWrapper>
                <label htmlFor="searchInput" className="visually-hidden">
                    Search
                </label>
                <SearchText id="searchInput" placeholder="Search" />
                <SearchIconWrapper>
                    <Divider />
                    <IconBackground>
                        <SearchIcon
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3e2c55b9e9c80418080b995a8de2396827f9460404287ddbeb913b17830fff?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                            alt="search"
                        />
                    </IconBackground>
                </SearchIconWrapper>
            </SearchWrapper>
        </SearchContainer>
    );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SearchWrapper = styled.div`
  border-radius: 19px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  width: 100%;
  gap: 40px 100px;
  flex-wrap: wrap;
  padding: 0 1px 0 19px;
  border: 1px solid rgba(211, 211, 211, 1);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SearchText = styled.input`
  color: rgba(140, 140, 140, 1);
  margin: auto 0;
  font: 400 16px Roboto, sans-serif;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const SearchIconWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  border: 1px solid rgba(211, 211, 211, 1);
`;

const IconBackground = styled.div`
  border-radius: 0 19px 19px 0;
  background-color: rgba(247, 247, 247, 1);
  align-self: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
`;

const SearchIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 19px;
`;

function IconButton({ src, alt, width, aspectRatio }) {
    return (
        <StyledIcon
            loading="lazy"
            src={src}
            alt={alt}
            $width={width}
            $aspectRatio={aspectRatio}
        />
    );
}

const StyledIcon = styled.img`
  aspect-ratio: ${(props) => props.$aspectRatio};
  object-fit: contain;
  object-position: center;
  width: ${(props) => props.$width};
  align-self: stretch;
  margin: auto 0;
`;

export default Head;
