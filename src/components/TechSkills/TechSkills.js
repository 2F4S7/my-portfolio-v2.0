import { Item, Text } from './TechSkills.style';

function TechSkills({ label, icon }) {
  return (
    <Item>
      <img src={icon} alt={label} width="40" height="40" />
      <Text>{label}</Text>
    </Item>
  );
}

export default TechSkills;
