import { FiMail } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

import { List, Item, Link } from './Contacts.style';

function Contacts() {
  return (
    <List>
      <Item>
        <Link href="mailto:mikhailprytychenko@gmail.com" aria-label="E-mail">
          <FiMail size="55" />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://github.com/2F4S7/"
          aria-label="GitHub"
          target="_blank"
        >
          <AiFillGithub size="55" />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://www.linkedin.com/in/mikhail-prytychenko-b4b507207/"
          aria-label="LinkedIn"
          target="_blank"
        >
          <FaLinkedin size="55" />
        </Link>
      </Item>
    </List>
  );
}

export default Contacts;
