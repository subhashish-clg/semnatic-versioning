/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    "main",
    {
      name: "dev-release",
      prerelease: true,
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    {
      path: "@semantic-release/changelog",
      changelogFile:
        process.env.BRANCH_NAME === "main"
          ? "CHANGELOG.md"
          : "CHANGELOG.beta.md",
    },
    {
      path: "@semantic-release/npm",
      npmPublish: false,
    },
    {
      path: "@semantic-release/git",
      assets: [
        process.env.BRANCH_NAME === "main"
          ? "CHANGELOG.md"
          : "CHANGELOG.beta.md",
        "package.json",
      ],
    },
    // "@semantic-release/github",
  ],
};
