export function getGitHubWorkspace() {
  const workspaceDir = process.env.GITHUB_WORKSPACE;
  if (!workspaceDir) {
    const errMsg = "Cannot find GITHUB_WORKSPACE in environment";
    throw errMsg;
  } else {
    return workspaceDir;
  }
}
