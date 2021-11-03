import error404Image from '../../assets/images/error404.png';
import { Img, Title } from './NotFoundView.style';

export default function NotFoundView() {
  return (
    <div role="alert">
      <Img src={error404Image} alt="Error 404" />
      <Title>The page does not exist! Please go home!</Title>
    </div>
  );
}
