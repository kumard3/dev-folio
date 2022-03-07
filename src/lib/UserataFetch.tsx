import { getGithubReadmeURL } from "../helper";

export const fetchUserReadme = async (username:string) => {
    const branches = ['main', 'master'];
    const names = ['README.md'];
    let readmeFound = false;
    let githubReadmeData = null;
    try {
      // eslint-disable-next-line no-restricted-syntax
      for (const branch of branches) {
        // eslint-disable-next-line no-restricted-syntax
        for (const fileName of names) {
          if (!readmeFound) {
            // eslint-disable-next-line no-await-in-loop
            const githubReadmeRes = await fetch(getGithubReadmeURL(username, branch, fileName));
            // eslint-disable-next-line no-await-in-loop
            githubReadmeData = await githubReadmeRes.text();
            readmeFound = !githubReadmeData.includes('404');
          }
        }
      }
      return githubReadmeData;
    } catch (error) {
      console.error(error);
      return null;
    }
  };