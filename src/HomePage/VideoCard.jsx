import * as React from "react";
import styled from "styled-components";

export function VideoCard({
                              thumbnailUrl,
                              duration,
                              channelAvatarUrl,
                              title,
                              channelName,
                              views,
                              uploadTime,
                              isCredible,
                              isFocusModeEnabled
                          }) {
    return (
        <VideoContainer>
            <ThumbnailWrapper>
                <ThumbnailImage
                    loading="lazy"
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                />
                <Duration>{duration}</Duration>
                {isFocusModeEnabled && isCredible && (
                    <CredibleBadge>
                        <CredibleIcon
                            src="images/credible.svg"
                            alt="Credible content"
                        />
                    </CredibleBadge>
                )}
            </ThumbnailWrapper>
            <ContentWrapper>
                <ChannelInfo>
                    <AvatarWrapper>
                        <ChannelAvatar
                            loading="lazy"
                            src={channelAvatarUrl}
                            alt="Channel avatar"
                        />
                    </AvatarWrapper>
                    <VideoTitle>{title}</VideoTitle>
                    <MenuIconWrapper>
                        <MenuIcon
                            loading="lazy"
                            src="images/Morei.svg"
                            alt="Video options menu"
                        />
                    </MenuIconWrapper>
                </ChannelInfo>
                <MetaInfo>
                    <ChannelNameWrapper>
                        <ChannelName>{channelName}</ChannelName>
                    </ChannelNameWrapper>
                    <ViewsAndTime>{views} views • {uploadTime}</ViewsAndTime>
                </MetaInfo>
            </ContentWrapper>
        </VideoContainer>
    );
}

const CredibleBadge = styled.div`
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 4px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CredibleIcon = styled.img`
    width: 100px;
    height: 30px;
`;

const VideoContainer = styled.div`
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const ThumbnailWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 12px;
    overflow: hidden;
`;

const ThumbnailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Duration = styled.div`
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
`;

const ContentWrapper = styled.div`
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ChannelInfo = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: start;
`;

const AvatarWrapper = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
`;

const ChannelAvatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const VideoTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #0f0f0f;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const MenuIconWrapper = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const MenuIcon = styled.img`
    width: 16px;
    height: 16px;
`;

const MetaInfo = styled.div`
    margin-left: 48px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const ChannelNameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const ChannelName = styled.span`
    color: #606060;
    font-size: 14px;
`;

const ViewsAndTime = styled.div`
  color: #606060;
  font-size: 14px;
`;