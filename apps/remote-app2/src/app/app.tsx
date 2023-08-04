import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>App2</h1>
      <NxWelcome title="remote-app2" />
    </StyledApp>
  );
}

export default App;
