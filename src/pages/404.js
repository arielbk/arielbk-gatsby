import React from "react";
import styled from 'styled-components';

import SEO from "../components/seo";
import GlobalStyle from '../assets/globalStyles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%);
  }

  h1 {
    color: #eee;
    display: block;
    text-align: center;
  }

  p {
    text-align: center;
    color: #999;
  }
`;

const NotFoundPage = () => (
  <Container>
    <GlobalStyle />
    <SEO title="404: Not found" />
    <div>
      <h1>NOT FOUND</h1>
      <p>
        That page doesn&#39;t exist... <br />
        Head over to the <a href="https://arielbk.com">homepage</a>
      </p>
    </div>
  </Container>
)

export default NotFoundPage
