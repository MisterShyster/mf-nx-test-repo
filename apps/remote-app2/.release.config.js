const name = 'remote-app2';
const path = `apps/${name}`;

module.exports = {
  name: name,
  branches: ['release'],
  pkgRoot: `dist/${path}`,
  tagFormat: `${name}-v\${version}`,
  commitPaths: [`${path}/*`],
  assets: [`${path}/CHANGELOG.md`],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          {scope: `*`, release: false},
          {scope: `${name}`, breaking: true, release: "major"},
          {scope: `${name}`, type: "feat", release: "minor"},
          {scope: `${name}`, release: "patch"},
        ],
      }
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${path}/CHANGELOG.md`,
      },
    ],
    // '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        prepareCmd: [
          `VERSION=\${nextRelease.version} && echo $VERSION > ${path}/.version`,
          `cp ${path}/.version dist/${path}/`,
        ].join(" && "),
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [`${path}/CHANGELOG.md`, `${path}/.version`],
        message:
          `chore(release): ${name} \${nextRelease.version} [skip ci]\n\n\${nextRelease.notes}`,
      },
    ],
    '@semantic-release/github', // Bitbucket doesn't offer an API to make releases.
  ],
};
