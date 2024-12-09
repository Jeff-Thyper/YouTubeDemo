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
            </GridContainer>
        </GalleryContainer>
    );
}

// Styles
const GalleryContainer = styled.main`
  display: flex;
  width: 50%;
    background-color: #61dafb;
`;

const TagsContainer = styled.nav`
    margin-left: 30px;
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
