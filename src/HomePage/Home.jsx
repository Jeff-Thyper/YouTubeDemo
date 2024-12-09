import * as React from "react";
import styled from "styled-components";
import Head from "./Head";
import NavigationBar from "./NavigationBar";

export function Home() {
    return (
        <div>
            <Head></Head>
            <NavigationBar></NavigationBar>
        </div>
    );
}
