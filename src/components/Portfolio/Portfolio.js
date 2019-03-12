import React from 'react';
import Project from '../Project/Project';
import {
  StyledPortfolio, Arrow, Title, Lead, Contact,
} from './Portfolio.styled';
import { StaticQuery, graphql } from 'gatsby';

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: {
          order: DESC,
          fields: [frontmatter___date, frontmatter___title]
        }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM YYYY")
                repo
                demo
                skills
                image {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <StyledPortfolio>
        <Arrow width="40" height="87" viewBox="0 0 40 87">
          <path d="M39.75 43.3013L0 86.6025V0L39.75 43.3013Z" fill="#505152" />
        </Arrow>
        <header>
          <Title>My projects</Title>
          <Lead>
            A selection of coding projects, with the more recent at the top.
          </Lead>

          <Contact>
            <a href="mailto:buchwald.kearney@gmail.com">
              <span>
                <i className="far fa-envelope" />
                Email
              </span>
            </a>
            <a href="https://github.com/arielbk">
              <span>
                <i className="fab fa-github" />
                GitHub
              </span>
            </a>
            <a href="https://www.linkedin.com/in/arielbk">
              <span>
                <i className="fab fa-linkedin" />
                LinkedIn
              </span>
            </a>
          </Contact>
        </header>

        {allMarkdownRemark.edges.map(({ node }, index) => (
          <Project {...node.frontmatter} html={node.html} key={node.id} dark={(index % 2 === 0)} />
        ))}

        <footer>
          <div>
            <Title>Get in touch!</Title>
            <Lead>
              The best way is to send me an
              {' '}
              <a href="mailto:buchwald.kearney@gmail.com">email</a>
            </Lead>
          </div>
        </footer>
      </StyledPortfolio>
    )}
  />
);

export default Portfolio;