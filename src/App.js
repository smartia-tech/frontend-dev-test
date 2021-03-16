import SpaceXLaunches from '../src/components/SpaceXLaunches';
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`
function App() {
  return (
    <div>
      <Heading>Space X Past Launches</Heading>
      <SpaceXLaunches />
    </div>
  );
}

export default App;
