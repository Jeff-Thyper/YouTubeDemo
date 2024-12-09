import * as React from "react";
import styled from "styled-components";

export function SearchBar() {
    return (
        <SearchContainer>
            <SearchInputWrapper>
                <SearchText>Search</SearchText>
                <SearchControls>
                    <Divider />
                    <SearchButton>
                        <SearchIcon
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3e2c55b9e9c80418080b995a8de2396827f9460404287ddbeb913b17830fff?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                            alt="Search"
                        />
                    </SearchButton>
                </SearchControls>
            </SearchInputWrapper>
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

const SearchInputWrapper = styled.div`
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

const SearchText = styled.div`
  color: rgba(140, 140, 140, 1);
  margin: auto 0;
  font: 400 16px Roboto, sans-serif;
`;

const SearchControls = styled.div`
  display: flex;
  flex: 1;
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  border: 1px solid rgba(211, 211, 211, 1);
`;

const SearchButton = styled.button`
  border-radius: 0 19px 19px 0;
  background-color: rgba(247, 247, 247, 1);
  align-self: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 19px;
`;