import React from "react";
import { ThemeProvider } from 'styled-components';

import Infobar from '../components/Infobar/Infobar';
import Portfolio from '../components/Portfolio/Portfolio';
import GlobalStyle, { Content } from '../assets/globalStyles';
import variables from '../assets/variables';

import Head from "../components/seo";


const IndexPage = () => (
  <>
    <Head title="arielbk" keywords={[`arielbk`, `developer`, `web developer`, `webdev`, `javascript`, `react`]} />
    <GlobalStyle />
    <ThemeProvider theme={variables}>
      <Content>
        <Infobar />
        <Portfolio />
      </Content>
    </ThemeProvider>
  </>
)

export default IndexPage
