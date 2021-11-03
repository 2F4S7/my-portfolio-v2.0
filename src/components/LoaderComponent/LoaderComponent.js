import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { accentColor, secondaryColor } from '../../assets/stylesVariables';
import { Overlay } from './LoaderComponent.style';

function LoaderComponent() {
  return (
    <Overlay>
      <Loader
        type="Plane"
        color={accentColor}
        secondaryColor={secondaryColor}
        height={100}
        width={100}
        timeout={0}
      />
    </Overlay>
  );
}

export default LoaderComponent;
