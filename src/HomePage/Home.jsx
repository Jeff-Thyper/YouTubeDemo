import * as React from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { IconGroup } from "./IconGroup";

export function Home() {
    return (
        <Container>
            <SearchWrapper>
                <SearchBar />
                <BrandLogo
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/232febee261919efdd74953e5edb7550aac631febb672796b3ce423abecb1f8b?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                    alt="Brand logo"
                />
            </SearchWrapper>
            <IconGroup />
        </Container>
    );
}

const Container = styled.div`
  align-self: end;
  display: flex;
  width: 100%;
  max-width: 1024px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 8px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const BrandLogo = styled.img`
  aspect-ratio: 1.15;
  object-fit: contain;
  object-position: center;
  width: 60px;
`;