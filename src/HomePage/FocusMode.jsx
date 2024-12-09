import * as React from "react";
import styled from "styled-components";

export function FocusMode() {
    return (
        <FocusModeWrapper>
            <FocusModeContainer>
                <HeaderSection>
                    <FocusIcon
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05d5c4ea460d6867eb8ab65e8ab8b496c546fe415426299df5847f4fce241d7f?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
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
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    // handle activation
                                }
                            }}
                        >
                            ACTIVATE FOCUS MODE
                        </ActivateButton>
                        <ToggleWrapper>
                            <ToggleButton
                                role="switch"
                                aria-checked="false"
                                tabIndex="0"
                            />
                            <ToggleTrack />
                        </ToggleWrapper>
                    </ControlSection>
                </ContentSection>
            </FocusModeContainer>
        </FocusModeWrapper>
    );
}

const FocusModeWrapper = styled.div`
  border-radius: 0;
  display: flex;
  max-width: 303px;
  flex-direction: column;
`;

const FocusModeContainer = styled.div`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  flex-direction: column;
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
  min-height: 1px;
  margin-top: 13px;
  width: 100%;
  border: 1px solid #e3e3e3;
`;

const ContentSection = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
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
  flex-basis: auto;
  margin: auto 0;
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
`;

const ToggleButton = styled.div`
  background-color: #000;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.53);
  border-radius: 50%;
  display: flex;
  width: 21px;
  height: 21px;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const ToggleTrack = styled.div`
  border-radius: 0 19px 19px 0;
  background-color: #d9d9d9;
  width: 19px;
  height: 14px;
  margin-top: 4px;
  position: absolute;
  right: 0;
`;
