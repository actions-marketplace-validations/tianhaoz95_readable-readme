import * as core from "@actions/core";
import * as github from "@actions/github";
import * as util from "./util";

const token = core.getInput("token");
const octokit = new github.GitHub(token);

export function postGitHubIssue(title: string, body: string) {
  const repoOwner = util.getGitHubRepoOwner();
  const repoId = util.getGitHubRepoId();
  octokit.issues.create({
    body,
    owner: repoOwner,
    repo: repoId,
    title,
  });
}
