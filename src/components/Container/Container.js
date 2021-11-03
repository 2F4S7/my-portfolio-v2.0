import PropTypes from 'prop-types';
import { Main } from './Container.style';

function Container({ children }) {
  return <Main>{children}</Main>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
