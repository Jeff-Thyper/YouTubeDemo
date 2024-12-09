import React from 'react';
import styled from 'styled-components';
import {VideoCard} from "./VideoCard";

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

    // Sample video data array
    const videos = [
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
        {
            thumbnailUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2cd3409fe7871fe63c0c358787a0c8d32f3f6bbcdbde4db3af009b6dbd85cf7",
            duration: "1:39:43",
            channelAvatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c57f366b52250d2ead3bb98b85bca4e9207f1b760058669f524b6a21fa6ad872",
            title: "Lecture 1: Definitions of System, Property, State, and Weight",
            channelName: "MIT OpenCourseWare",
            views: "13K",
            uploadTime: "3 days ago"
        },
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
                    <img src="/images/Morei.svg" alt="" />
                </NavigationButton>
            </TagsContainer>
            <GridContainer>
                {videos.map((video, index) => (
                    <VideoCard key={index} {...video} />
                ))}
            </GridContainer>
        </GalleryContainer>
    );
}

const GalleryContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 700px;
    background-color: #fff;
`;

const TagsContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    overflow-x: auto;
    position: sticky;
    top: 0;
    z-index: 1;
    margin-left: 7px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Tag = styled.button`
    border: none;
    border-radius: 8px;
    background-color: ${props => props.$active ? '#0f0f0f' : '#f2f2f2'};
    color: ${props => props.$active ? '#fff' : '#0f0f0f'};
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${props => props.$active ? '#0f0f0f' : '#e5e5e5'};
    }
`;

const NavigationButton = styled.button`
    border: none;
    background: none;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
    padding: 24px;
    overflow-y: auto;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;