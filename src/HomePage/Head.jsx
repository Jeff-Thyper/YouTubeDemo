import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ProfileMenu from "./ProfileMenu";

function Head() {
    const [showProfile, setShowProfile] = useState(false);
    const profileRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
            onClick: () => setShowProfile(!showProfile),
            ref: profileRef
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
                </SearchSection>
                <NotificationIcon
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/232febee261919efdd74953e5edb7550aac631febb672796b3ce423abecb1f8b?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                    alt="notifications"
                />
                <IconSection>
                    {navigationIcons.map((icon, index) => (
                        <IconButton
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            width={icon.width}
                            aspectRatio={icon.ratio}
                            onClick={icon.onClick}
                            ref={icon.ref}
                        />
                    ))}
                </IconSection>
            </NavContainer>
            {showProfile && (
                <ProfileMenuWrapper ref={menuRef}>
                    <ProfileMenu />
                </ProfileMenuWrapper>
            )}
        </HeaderContainer>
    );
}
const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  background-color: #f8f8f8;
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
  display: flex;
    padding-left: 200px;
`;

const NotificationIcon = styled.img`
    margin-left: -100px;
  width: 60px;
`;

const IconSection = styled.div`
    margin-left: 200px;
  display: flex;
  gap: 30px;
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
        <SearchWrapper>
            <SearchText id="searchInput" placeholder="Search" />
            <Divider />
            <IconBackground>
                <SearchIcon
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3e2c55b9e9c80418080b995a8de2396827f9460404287ddbeb913b17830fff?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                    alt="search"
                />
            </IconBackground>
        </SearchWrapper>
    );
}

const SearchWrapper = styled.div`
  border-radius: 19px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  width: 500px;
  //gap: 40px 100px;
  //flex-wrap: wrap;
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

const Divider = styled.div`
  width: 1px;
  height: 40px;
  border: 1px solid rgba(211, 211, 211, 1);
    margin-left: 260px;

`;

const IconBackground = styled.div`
    width: 30px;
  border-radius: 0 19px 19px 0;
  background-color: rgba(247, 247, 247, 1);
    margin-left: auto;
  padding: 10px 20px;
`;

const SearchIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 19px;
`;

const ProfileMenuWrapper = styled.div`
    position: absolute;
    top: 60px;
    right: 20px;
    z-index: 1000;
`;

const IconButton = styled.img`
    aspect-ratio: ${(props) => props.$aspectRatio};
    object-fit: contain;
    object-position: center;
    width: ${(props) => props.$width};
    align-self: stretch;
    margin: auto 0;
    cursor: pointer;
`;

export default Head;
