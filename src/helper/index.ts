import { getGithubReadmeURLType } from "../types/helperTypes";
import { GITHUB_README_URL } from "./contansts";

export const getGithubReadmeURL = (username: string, branch = 'main', fileName = 'README.md') => {
  return `${GITHUB_README_URL}${username}/${username}/${branch}/${fileName}`;
};


export const toLowerCase = (value: string) => {
  if (!value || value.length < 1) return value;
  return value.trim().toLowerCase();
};
