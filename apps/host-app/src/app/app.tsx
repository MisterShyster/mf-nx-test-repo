import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@mf-nx-test/load-remote-module';

// const RemoteApp1 = React.lazy(() => import('remote-app1/Module'));

// const RemoteApp2 = React.lazy(() => import('remote-app2/Module'));

const RemoteApp1 = React.lazy(() =>
  loadRemoteModule('remote-app1', './Module')
);
const RemoteApp2 = React.lazy(() =>
  loadRemoteModule('remote-app2', './Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/remote-app1">RemoteApp1</Link>
        </li>

        <li>
          <Link to="/remote-app2">RemoteApp2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host-app" />} />

        <Route path="/remote-app1" element={<RemoteApp1 />} />

        <Route path="/remote-app2" element={<RemoteApp2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
