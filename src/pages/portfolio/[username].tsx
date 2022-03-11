import React from "react";
import { useRouter } from "next/router";

import { GetServerSideProps } from "next";

import { fetchUserReadme } from "../../lib/UserataFetch";
import HeroComponent from "../../template-2/components/Hero";
import About from "../../template-2/components/About";
import Repo from "../../template-2/components/Repo";

export default function PortfolioPage({
  devData,
  githubRepoData,
  githubUserData,
}: any) {
  // const {saveData}:any = useSaveData();
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

  return (
    <div className="">
      <HeroComponent
        name={githubUserData.name}
        image={githubUserData.profile_image}
        summary={githubUserData.summary}
      />
      <About data={data!} />
      <Repo githubRepoData={githubRepoData} />
      {/* <ReactMarkdownWithHtml allowDangerousHtml>{data!}</ReactMarkdownWithHtml>  */}
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const devCommunity = await fetch(
    //@ts-ignore
    `https://dev.to/api/articles?username=${params.username}`
  );
  const githubUser = await fetch(
    //@ts-ignore
    `https://dev.to/api/users/by_username?url=${params.username}`
  );
  const githubRepo = await fetch(
    //@ts-ignore
    `https://api.github.com/users/${params.username}/repos?per_page=20`
  );
  const githubUserData = await githubUser.json();
  const githubRepoData = await githubRepo.json();
  const devData = await devCommunity.json();
  return { props: { devData, githubRepoData, githubUserData } };
};
//https://dev.to/api/users/by_username?url=colbyfayock
