import React from 'react';
import styled from 'styled-components';

export default function VideoGallery() {
    const filterTags = [
        { label: 'All', active: true },
        { label: 'Podcasts' },
        { label: 'Python' },
        { label: 'Music' },
        { label: 'Biology' },
        { label: 'Calculus' },
        { label: 'News' },
        { label: 'Mixes' },
        { label: 'Gaming' },
        { label: 'Sketch Comedy' },
        { label: 'Dinners' },
        { label: 'Live' },
        { label: 'Dance' }
    ];

    const gridVideos = [
        { duration: '1:39:43', thumbnail: 'https://example.com/video1.jpg' },
        { duration: '5:55', thumbnail: 'https://example.com/video2.jpg' },
        { duration: '2:01', thumbnail: 'https://example.com/video3.jpg' }
    ];

    const listVideos = [
        {
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channel: "MIT OpenCourseWare",
            views: "13K",
            timeAgo: "3 days",
            avatar: "https://example.com/avatar1.jpg"
        },
        {
            title: "Program design: Nim game | Intro to CS - Python | Khan Academy",
            channel: "Khan Academy",
            views: "5.6K",
            timeAgo: "3 weeks",
            avatar: "https://example.com/avatar2.jpg",
            verified: true
        }
    ];

    return (
        <GalleryContainer>
            <TagsContainer>
                {filterTags.map((tag, index) => (
                    <Tag key={index} $active={tag.active}>
                        {tag.label}
                    </Tag>
                ))}
                <NavigationButton aria-label="Show more tags">
                    <img src="https://example.com/navbutton.png" alt="" />
                </NavigationButton>
            </TagsContainer>
            <GridContainer>
                <Grid>
                    {gridVideos.map((video, index) => (
                        <GridColumn key={index}>
                            <ThumbnailContainer>
                                <ThumbnailImage loading="lazy" src={video.thumbnail} alt="" />
                                <Duration>{video.duration}</Duration>
                            </ThumbnailContainer>
                        </GridColumn>
                    ))}
                </Grid>
            </GridContainer>
            <ListContainer>
                {listVideos.map((video, index) => (
                    <ItemContainer key={index}>
                        <VideoInfo>
                            <AvatarContainer>
                                <Avatar loading="lazy" src={video.avatar} alt="" />
                            </AvatarContainer>
                            <Title>{video.title}</Title>
                        </VideoInfo>
                        <ChannelInfo>
                            <ChannelName>{video.channel}</ChannelName>
                            {video.verified && (
                                <VerifiedBadge
                                    loading="lazy"
                                    src="https://example.com/verified.png"
                                    alt="Verified Channel"
                                />
                            )}
                        </ChannelInfo>
                        <ViewInfo>{`${video.views} views • ${video.timeAgo} ago`}</ViewInfo>
                    </ItemContainer>
                ))}
            </ListContainer>
        </GalleryContainer>
    );
}

// Styles
const GalleryContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const TagsContainer = styled.nav`
  display: flex;
  align-items: start;
  gap: 20px;
  color: #000;
  text-align: center;
  justify-content: space-between;
  font: 500 14px Roboto, sans-serif;
`;

const Tag = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${props => props.$active ? '#000' : '#f1f1f1'};
  color: ${props => props.$active ? '#fff' : '#000'};
  padding: 11px 12px;
  font: inherit;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: ${props => props.$active ? '11px 12px' : '0 20px'};
  }
`;

const NavigationButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin: auto 0;
`;

const GridContainer = styled.section`
  margin-top: 36px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 3px;
  }
`;

const Grid = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  aspect-ratio: 1.781;
  align-items: end;
  padding: 185px 77px 7px;

  @media (max-width: 991px) {
    margin-top: 16px;
    padding: 100px 0 0 20px;
  }
`;

const ThumbnailImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Duration = styled.div`
  position: relative;
  border-radius: 6px;
  background-color: rgba(81, 81, 90, 0.95);
  color: #fff;
  padding: 4px 5px;
  font: 500 13px Roboto, sans-serif;
`;

const ListContainer = styled.section`
  display: flex;
  margin-top: 12px;
  width: 100%;
  gap: 40px 65px;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 6px;
  }
`;

const ItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoInfo = styled.div`
  align-self: stretch;
  display: flex;
  gap: 14px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  position: relative;
  width: 36px;
  aspect-ratio: 1;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h3`
  color: #000;
  flex-grow: 1;
  font: 500 18px Roboto, sans-serif;
  margin: 0;
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 5px;
`;

const ChannelName = styled.span`
  color: #6a6a6a;
  font: 500 16px Roboto, sans-serif;
`;

const VerifiedBadge = styled.img`
  width: 18px;
  height: 18px;
`;

const ViewInfo = styled.div`
  color: #6a6a6a;
  margin-top: 5px;
  font: 500 16px Roboto, sans-serif;
`;
