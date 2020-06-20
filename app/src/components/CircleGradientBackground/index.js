import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const CircleGradientBackground = styled(LinearGradient).attrs(
  ({ theme: { white, lightBlue } }) => ({
    colors: [lightBlue, white],
  }),
)`
  position: absolute;
  height: 30%;
  width: 100%;
  top: 0;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;

export default CircleGradientBackground;
