import React, { useState } from 'react';
import styled from 'styled-components';

const FocusModePopup = ({ isOpen, onClose, isFocusModeEnabled, onToggle }) => {
    if (!isOpen) return null;

    return (
        <PopupOverlay onClick={onClose}>
            <PopupContent onClick={e => e.stopPropagation()}>
                <HeaderSection>
                    <FocusIcon
                        src="/api/placeholder/17/17"
                        alt="Focus mode icon"
                    />
                    <HeaderText>Focus Mode</HeaderText>
                </HeaderSection>
                <Divider />
                <ContentSection>
                    <Description>
                        This helps hide unrelated or distracting videos when viewing
                        educational content.
                        <br />
                        No filter is 100% accurate.
                    </Description>
                    <BrowserNote>
                        This setting only applies to this browser.
                    </BrowserNote>
                    <ControlSection>
                        <ActivateButton
                            tabIndex="0"
                            role="button"
                            onClick={onToggle}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    onToggle();
                                }
                            }}
                        >
                            {isFocusModeEnabled ? 'DEACTIVATE' : 'ACTIVATE'} FOCUS MODE
                        </ActivateButton>
                        <ToggleWrapper onClick={onToggle}>
                            <ToggleButton
                                role="switch"
                                aria-checked={isFocusModeEnabled}
                                tabIndex="0"
                                isActive={isFocusModeEnabled}
                            />
                            <ToggleTrack isActive={isFocusModeEnabled} />
                        </ToggleWrapper>
                    </ControlSection>
                </ContentSection>
            </PopupContent>
        </PopupOverlay>
    );
};

const ProfileMenu = () => {
    const [isFocusModeOpen, setIsFocusModeOpen] = useState(false);
    const [isFocusModeEnabled, setIsFocusModeEnabled] = useState(false);

    const handleFocusModeClick = () => {
        setIsFocusModeOpen(true);
    };

    const handleToggleFocusMode = () => {
        setIsFocusModeEnabled(!isFocusModeEnabled);
    };

    const menuSections = [
        {
            items: [
                {
                    icon: "/api/placeholder/24/24",
                    text: "Youtube Studio"
                },
                {
                    icon: "/api/placeholder/24/24",
                    text: "Purchases and memberships"
                }
            ]
        },
        {
            items: [
                {
                    icon: "/api/placeholder/24/24",
                    text: "Your data in YouTube"
                },
                {
                    icon: "/api/placeholder/24/24",
                    text: "Appearance: Light"
                },
                {
                    icon: "/api/placeholder/24/24",
                    text: "Language: British English"
                },
                {
                    icon: "/api/placeholder/24/24",
                    text: "Restricted Mode: Off"
                },
                {
                    icon: "/api/placeholder/24/24",
                    text: `Focus Mode: ${isFocusModeEnabled ? 'On' : 'Off'}`,
                    onClick: handleFocusModeClick
                },
                {
                    icon: "/api/placeholder/24/24",
                    text: "Location: United States"
                },
                {
                    icon: "/api/placeholder/24/24",
                    text: "Keyboard shortcuts"
                }
            ]
        },
        {
            items: [
                {
                    icon: "/api/placeholder/24/24",
                    text: "Settings"
                }
            ]
        },
        {
            items: [
                {
                    icon: "/api/placeholder/24/24",
                    text: "Help"
                },
                {
                    icon: "/api/placeholder/24/24",
                    text: "Send feedback"
                }
            ]
        }
    ];

    return (
        <div>
            <MenuContainer>
                <MenuContent>
                    <ProfileWrapper>
                        <ProfileContent>
                            <Avatar
                                src="/api/placeholder/40/40"
                                alt="User avatar"
                            />
                            <UserInfo>
                                <UserName>No Thoughts Head Empty</UserName>
                                <UserHandle>@no_thoughts_head_empty</UserHandle>
                            </UserInfo>
                        </ProfileContent>
                        <ViewChannel>View your channel</ViewChannel>
                    </ProfileWrapper>
                    <Divider />
                    <ControlsWrapper>
                        <AccountItem>
                            <ControlIcon
                                src="/api/placeholder/24/24"
                                alt="Google Account"
                            />
                            <ControlText>Google Account</ControlText>
                        </AccountItem>
                        <AccountItem>
                            <ControlIcon
                                src="/api/placeholder/24/24"
                                alt="Switch account"
                            />
                            <ControlText>Switch account</ControlText>
                        </AccountItem>
                        <AccountItem>
                            <ControlIcon
                                src="/api/placeholder/24/24"
                                alt="Sign out"
                            />
                            <ControlText>Sign out</ControlText>
                        </AccountItem>
                    </ControlsWrapper>
                    <Divider />
                    {menuSections.map((section, index) => (
                        <React.Fragment key={index}>
                            <SectionWrapper>
                                {section.items.map((item, idx) => (
                                    <MenuItem key={idx} onClick={item.onClick}>
                                        <MenuIcon src={item.icon} alt={item.text} />
                                        <MenuText>{item.text}</MenuText>
                                    </MenuItem>
                                ))}
                            </SectionWrapper>
                            {index < menuSections.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </MenuContent>
            </MenuContainer>

            <FocusModePopup
                isOpen={isFocusModeOpen}
                onClose={() => setIsFocusModeOpen(false)}
                isFocusModeEnabled={isFocusModeEnabled}
                onToggle={handleToggleFocusMode}
            />
        </div>
    );
};

// [Previous styled components remain exactly the same]
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.25);
  width: 303px;
  padding: 22px 0;
`;

const HeaderSection = styled.div`
  display: flex;
  margin-left: 19px;
  gap: 15px;
  color: #000;
  font: 500 16px Roboto, sans-serif;
`;

const FocusIcon = styled.img`
  aspect-ratio: 1.13;
  object-fit: contain;
  object-position: center;
  width: 17px;
`;

const HeaderText = styled.div`
  font: 500 16px Roboto, sans-serif;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e3e3e3;
  margin: 16px 0;
`;

const ContentSection = styled.div`
  padding: 0 19px;
`;

const Description = styled.div`
  color: #000;
  font: 400 14px Roboto, sans-serif;
`;

const BrowserNote = styled.div`
  color: #000;
  margin-top: 19px;
  font: 400 14px Roboto, sans-serif;
`;

const ControlSection = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 13px;
`;

const ActivateButton = styled.div`
  color: #606060;
  letter-spacing: 0.42px;
  font: 700 14px Roboto, sans-serif;
  cursor: pointer;
  
  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  background-color: ${props => props.isActive ? '#000' : '#fff'};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.53);
  border-radius: 50%;
  width: 21px;
  height: 21px;
  position: relative;
  z-index: 1;
  transform: translateX(${props => props.isActive ? '19px' : '0'});
  transition: transform 0.2s, background-color 0.2s;
`;

const ToggleTrack = styled.div`
  border-radius: 19px;
  background-color: ${props => props.isActive ? '#000' : '#d9d9d9'};
  width: 40px;
  height: 14px;
  margin-top: 4px;
  position: absolute;
  transition: background-color 0.2s;
`;

const MenuContainer = styled.div`
  border-radius: 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
  max-width: 300px;
`;

const MenuContent = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 17px 0;
`;

const ProfileWrapper = styled.div`
  padding: 0 15px;
`;

const ProfileContent = styled.div`
  display: flex;
  gap: 11px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 17px;
  font-family: Roboto, sans-serif;
`;

const UserHandle = styled.div`
  font-size: 16px;
  margin-top: 5px;
  font-family: Roboto, sans-serif;
`;

const ViewChannel = styled.div`
  color: #2d76da;
  font-size: 14px;
  margin-top: 15px;
  font-family: Roboto, sans-serif;
`;

const ControlsWrapper = styled.div`
  padding: 0 15px;
`;

const AccountItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  
  &:hover {
    background-color: #f2f2f2;
  }
`;

const ControlIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ControlText = styled.div`
  font-size: 14px;
  font-family: Roboto, sans-serif;
`;

const SectionWrapper = styled.div`
  padding: 0 15px;
`;

const MenuItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  
  &:hover {
    background-color: #f2f2f2;
  }
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const MenuText = styled.div`
  font-size: 14px;
  font-family: Roboto, sans-serif;
`;

export default ProfileMenu;