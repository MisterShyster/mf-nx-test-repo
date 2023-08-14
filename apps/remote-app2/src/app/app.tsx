import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <div>Element</div>
      <NxWelcome title="This is remote-app2" />
    </StyledApp>
  );
}

export default App;
