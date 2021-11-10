import Projects from '../../components/Projects';
import { ownProjects, commandProjects } from './myProjects';
import { Title, TypeProject, List } from './ProjectsView.style';

function ProjectsView() {
  return (
    <>
      <Title>
        [<TypeProject> TEAMWORK</TypeProject> _PROJECTS ]
      </Title>
      <List>
        {commandProjects.map(
          ({ id, label, link, preview, info, tech, repo }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              preview={preview}
              info={info}
              tech={tech}
              repo={repo}
            />
          ),
        )}
      </List>
      <Title>
        [<TypeProject> MY PERSONAL</TypeProject> _PROJECTS ]
      </Title>
      <List>
        {ownProjects.map(({ id, label, link, preview, info, tech, repo }) => (
          <Projects
            key={id}
            label={label}
            link={link}
            preview={preview}
            info={info}
            tech={tech}
            repo={repo}
          />
        ))}
      </List>
    </>
  );
}

export default ProjectsView;
