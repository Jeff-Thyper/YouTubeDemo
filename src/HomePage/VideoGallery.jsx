import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {VideoCard} from "./VideoCard";

export default function VideoGallery() {

    const [isFocusModeEnabled, setIsFocusModeEnabled] = useState(
        JSON.parse(localStorage.getItem('focusModeEnabled') || 'false')
    );

    // Listen for changes to localStorage
    useEffect(() => {
        const handleStorageChange = () => {
            const newValue = JSON.parse(localStorage.getItem('focusModeEnabled') || 'false');
            setIsFocusModeEnabled(newValue);
        };

        // Listen for storage events
        window.addEventListener('storage', handleStorageChange);

        // Also listen for a custom event for same-window updates
        window.addEventListener('focusModeChanged', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('focusModeChanged', handleStorageChange);
        };
    }, []);

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
            uploadTime: "3 days ago",
            isCredible: true
        },
        {
            thumbnailUrl: "images/game1.png",
            duration: "10:02",
            channelAvatarUrl: "images/game1.jpg",
            title: "Where Did You Learn To Fly!? (Game Fails #461)",
            channelName: "GameSprout",
            views: "30K",
            uploadTime: "11 hours ago",
            isCredible: false
        },
        {
            thumbnailUrl: "images/course1.png",
            duration: "5:55",
            channelAvatarUrl: "images/course1.svg",
            title: "Program design: Nim game | Intro to \n" +
                "CS - Python | Khan Academy",
            channelName: "Khan Academy",
            views: "5.6K",
            uploadTime: "3 weeks ago",
            isCredible: true
        },
        {
            thumbnailUrl: "images/cook.png",
            duration: "17:42",
            channelAvatarUrl: "images/cook.jpg",
            title: "How To Cook The Perfect Steak",
            channelName: "Nick DiGiovanni",
            views: "5.8M",
            uploadTime: "1 year ago",
            isCredible: false
        },
        {
            thumbnailUrl: "images/c4.png",
            duration: "28:07",
            channelAvatarUrl: "images/c4.svg",
            title: "Applications of Integration Formula\n" +
                "Review - Antiderivatives, Definite ...",
            channelName: "The Organic Chemistry Tutor",
            views: "26K",
            uploadTime: "3 weeks ago",
            isCredible: true
        },
        {
            thumbnailUrl: "images/c5.png",
            duration: "17:31",
            channelAvatarUrl: "images/c5.svg",
            title: "Biology explained in 17 Minutes",
            channelName: "Wacky Science",
            views: "905K",
            uploadTime: "4 months ago",
            isCredible: true
        },
        {
            thumbnailUrl: "images/c2.png",
            duration: "2:01",
            channelAvatarUrl: "images/c2.svg",
            title: "2 Years of College Computer Science \n" +
                "in 2 Minutes",
            channelName: "Prof Korupt",
            views: "154K",
            uploadTime: "2 months ago",
            isCredible: false
        },
        {
            thumbnailUrl: "images/c3.png",
            duration: "19:06",
            channelAvatarUrl: "images/c3.svg",
            title: "Calculus at Fifth Grade Level",
            channelName: "Lukey B. The Physics G",
            views: "8.4M",
            uploadTime: "7 years ago",
            isCredible: false
        },
        {
            thumbnailUrl: "images/game2.png",
            duration: "31:32",
            channelAvatarUrl: "images/game2.jpg",
            title: "25 Perfect 10/10 Games You MUST Play",
            channelName: "GameVerseChamp",
            views: "5.8M",
            uploadTime: "1 month ago",
            isCredible: false
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
                    <VideoCard
                        key={index}
                        {...video}
                        isFocusModeEnabled={isFocusModeEnabled}
                    />
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