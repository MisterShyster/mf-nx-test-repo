const name = 'remote-app';
const path = `apps/${name}`;

module.exports = {
  name: name,
  pkgRoot: `dist/${path}`,
  tagFormat: '${version}',
  commitPaths: [`${path}/*`],
  assets: [`${path}/README.md`, `${path}/CHANGELOG.md`],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${path}/CHANGELOG.md`,
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd: `VERSION=\${nextRelease.version} && echo $VERSION > ${path}/.version`,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [`${path}/CHANGELOG.md`],
        message:
          `chore(release): ${name} \${nextRelease.version} [skip ci]\n\n\${nextRelease.notes}`,
      },
    ],
  ],
};
