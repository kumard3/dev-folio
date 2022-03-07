import React from "react";
import { useRouter } from "next/router";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import { GetServerSideProps } from "next";

import { fetchUserReadme } from "../../lib/UserataFetch";

export default function PortfolioPage({ devData, githubRepoData,githubUserData }) {
  const router = useRouter();
  const { username } = router.query;
  console.log(username);
  const [data, setData] = React.useState<string | null>("");

  React.useEffect(() => {
    async function GtihubReadMe() {
      const github = await fetchUserReadme(`${username}`);
      setData(github);
    }
    GtihubReadMe();
  }, []);
  console.log(githubUserData);
  return (
    <div>
      <ReactMarkdownWithHtml unwrapDisallowed allowDangerousHtml>
        {data!}
      </ReactMarkdownWithHtml>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const devCommunity = await fetch(
    `https://dev.to/api/articles?username=${params.username}`
  );
  const githubUser = await fetch(
    `https://api.github.com/users/${params.username}`
  );
  const githubRepo = await fetch(
    `https://api.github.com/users/${params.username}/repos?per_page=20`
  );
  const githubUserData = await githubUser.json();
  const githubRepoData = await githubRepo.json();
  const devData = await devCommunity.json();
  return { props: { devData, githubRepoData, githubUserData } };
};
