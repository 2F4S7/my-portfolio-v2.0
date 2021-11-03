import { techSkills } from './techSkills';
import TechSkills from '../../components/TechSkills';
import Contacts from '../../components/Contacts';
import headerimg from '../../assets/images/headerimg.png';
import PropTypes from 'prop-types';
import { Wrapper, Flex, Title, Info, SubTitle, List } from './HomeView.style';

function HomeView() {
  return (
    <>
      <Wrapper>
        <Flex>
          <Title>Hello!</Title>
          <Info>My name's Mikhail and I’m a FullStack Developer!</Info>
        </Flex>
        <Flex>
          <img
            src={headerimg}
            alt="Mikhail Prytychenko"
            width="600"
            height="665"
          />
        </Flex>
      </Wrapper>
      <SubTitle>[ Tech Skills_ ]</SubTitle>
      <List>
        {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))}
      </List>
      <SubTitle>[ Contacts_ ]</SubTitle>
      <Contacts />
    </>
  );
}

HomeView.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.object),
};

export default HomeView;
