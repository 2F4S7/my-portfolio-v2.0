import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import propTypes from 'prop-types';
import {
  Item,
  Preview,
  Wrapper,
  Title,
  Info,
  Tech,
  TechItem,
  Link,
  Img,
  Content,
} from './Projects.style';

function Projects({ label, link, preview, info, tech, repo }) {
  return (
    <Item>
      <Preview>
        <Title>{label}</Title>
        <Img
          src={preview}
          alt={label}
          loading="lazy"
          width="500"
          height="300"
        />
        <Wrapper>
          <Link
            href={repo}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
          >
            <AiFillGithub size="40" />
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label="Live page"
          >
            <FiExternalLink size="40" />
          </Link>
        </Wrapper>
      </Preview>
      <Content>
        <Tech>
          {tech.map(({ id, name }) => (
            <TechItem key={id}>{name}</TechItem>
          ))}
        </Tech>
        <Info>/ {info}</Info>
      </Content>
    </Item>
  );
}

Projects.propTypes = {
  info: propTypes.string,
  label: propTypes.string,
  link: propTypes.string,
  preview: propTypes.string,
  repo: propTypes.string,
  tech: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string,
    }),
  ),
};

export default Projects;
