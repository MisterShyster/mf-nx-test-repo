import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <div>Hello!!!!!!</div>
      <NxWelcome title="remote-app1" />
    </StyledApp>
  );
}

export default App;
