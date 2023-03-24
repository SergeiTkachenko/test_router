import { RotatingLines } from 'react-loader-spinner';
import { SpinerStyled } from './spinerStyled';

export default function Spiner() {
  return (
    <SpinerStyled
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% -50%)',
      }}
    >
      <RotatingLines
        strokeColor="#2c54d6"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </SpinerStyled>
  );
}
