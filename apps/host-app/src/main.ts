import { setRemoteDefinitions } from '@mf-nx-test/load-remote-module';

// fetch('/assets/module-federation.manifest.json')
fetch('https://manifest-server-demo.vercel.app/manifest/')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => {
    import('./bootstrap').catch((err) => console.error(err));
  });
