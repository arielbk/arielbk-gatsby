import React from 'react';
import {
  StyledInfobar, Container, Title, Caption, StyledBiophoto, Biotext, Contact,
} from './Infobar.styled';
import biophoto from '../../images/arielbk.jpg';

const Infobar = () => (
  <StyledInfobar>
    <Container>
      {/* HEADER SECTION */}
      <header>
        <Title>
          ariel
          {' '}
          <br />
          buchwald
          {' '}
          <br />
          kearney
        </Title>
        <Caption>web developer</Caption>

        <StyledBiophoto src={biophoto} />
      </header>

      {/* <!-- BIO SECTION --> */}
      <Biotext>
        <p>
          I&apos;m a web developer living in Zagreb.
        I code every day with music pumping in my headphones.
        </p>
        <p>
          Right now I&apos;m immersed in JavaScript and React.
        </p>
      </Biotext>

      {/* <!-- CONTACT SECTION --> */}
      <Contact>
        <div>
          <a href="mailto:buchwald.kearney@gmail.com">
            <span>
              <i className="far fa-envelope" />
              <h4>Email</h4>
            </span>
          </a>
        </div>
        <div>
          <a href="https://github.com/arielbk">
            <span>
              <i className="fab fa-github" />
              <h4>GitHub</h4>
            </span>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/arielbk">
            <span>
              <i className="fab fa-linkedin" />
              <h4>LinkedIn</h4>
            </span>
          </a>
        </div>
      </Contact>
    </Container>
  </StyledInfobar>
);

export default Infobar;