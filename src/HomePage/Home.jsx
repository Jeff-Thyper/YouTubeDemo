import * as React from "react";
import styled from "styled-components";
import Head from "./Head";
import NavigationBar from "./NavigationBar";
import VideoGallery from "./VideoGallery";

export function Home() {
    return (
        <div>
            <Head></Head>
            <VContainer>
                <NavigationBar></NavigationBar>
                <VideoGallery></VideoGallery>
            </VContainer>
        </div>
    );
}

const VContainer = styled.div`
  display: flex;
`;