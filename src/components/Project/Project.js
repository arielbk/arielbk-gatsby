import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import {
  StyledProject,
  Container,
  TopTitle,
  Date, Skills,
  Skill,
  ThumbContainer,
  Thumb,
  ThumbOverlay,
  Body,
  BottomTitle,
  Text,
  Actions,
  Button,
} from './Project.styled';

const Project = (props) => {
  const {
    dark, demo, title, date, repo, body, image, skills
  } = props;
  return (
    <StyledProject dark={dark}>
      <Container>
        <TopTitle>
          <a href={demo} target="_blank" rel="noopener noreferrer" title={`${title} demo`}>
            {title}
          </a>
        </TopTitle>
        <Date>{date}</Date>

        <Skills>
          {skills.length
            && skills.map(skill => (
              <Skill skill={skill.title} key={skill.title} bg={skill.bgColor} text={skill.textColor}>{skill.title}</Skill>
            ))}
        </Skills>
        <ThumbContainer>
          <Thumb fluid={image.asset.fluid} alt={`${title} main page screenshot`} />
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <ThumbOverlay>
              <i className="fas fa-external-link-alt" />
            </ThumbOverlay>
          </a>
        </ThumbContainer>

        <Body>
          <BottomTitle>
            <a href={demo} target="_blank" rel="noopener noreferrer" title={`${title} demo`}>
              {title}
            </a>
          </BottomTitle>

          {/* <Text dangerouslySetInnerHTML={{
            __html: html
          }}>
          </Text> */}
          <Text><BlockContent blocks={body} /></Text>

          <Actions>
            <Button href={repo} target="_blank">
              Code
              {' '}
              <i className="fas fa-external-link-alt" />
            </Button>
            <Button href={demo} target="_blank">
              Demo
              {' '}
              <i className="fas fa-external-link-alt" />
            </Button>
          </Actions>
        </Body>
      </Container>
    </StyledProject>
  );
};

Project.propTypes = {
  dark: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({}),
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  })),
  body: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  date: PropTypes.string,
  repo: PropTypes.string,
  demo: PropTypes.string.isRequired,
};

Project.defaultProps = {
  image: 'static/images/blank.png',
  skills: [
    'Other',
  ],
  date: 'In Progress',
  repo: 'https://github.com/arielbk',
};

export default Project;
