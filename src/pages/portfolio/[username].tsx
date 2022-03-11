import React from "react";
import { useRouter } from "next/router";

import { GetServerSideProps } from "next";
import VercelButton from "../../components/VercelButton";
import { fetchUserReadme } from "../../lib/UserataFetch";
import HeroComponent from "../../template-1/components/Hero";
import About from "../../template-1/components/About";
import Repo from "../../template-1/components/Repo";
import { DEVTO_USER_URL } from "../../helper/contansts";
import NavComponent from "../../template-1/components/NavComponent";
import Blog from "../../template-1/components/Blog";
import Footer from "../../template-1/components/Footer";

export default function PortfolioPage({
  devData,
  githubRepoData,
  githubUserData,
  devUserData,
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
  console.log(githubRepoData);
  return (
    <div>
      <VercelButton />
      {devData.length === 0 ? (
        <NavComponent name={githubUserData.name} blog={true} />
      ) : (
        <NavComponent name={githubUserData.name} blog={false} />
      )}

      <HeroComponent
        name={githubUserData.name}
        image={githubUserData.avatar_url}
        summary={githubUserData.bio}
      />
      <About data={data!} />
      {devData.length === 0 ? "" : <Blog devData={devData} />}

      
      <Repo githubRepoData={githubRepoData} />
      <Footer username={githubUserData.name} />
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
    `https://api.github.com/users/${params.username}`
  );
  const githubRepo = await fetch(
    //@ts-ignore
    `https://api.github.com/users/${params.username}/repos?per_page=20`
  );
  //@ts-ignore

  // const devUser = await fetch(`${DEVTO_USER_URL}${params.username}`);
  const devUser = await fetch(`${DEVTO_USER_URL}${params.username}`);
  const test = await fetch(
    //@ts-ignore
    `https://api.github.com/users/${params.username}`
  );
  const t = await test.json();
  const devUserData = await devUser.json();

  const githubUserData = await githubUser.json();
  const githubRepoData = await githubRepo.json();
  const devData = await devCommunity.json();
  return { props: { devData, githubRepoData, githubUserData, t, devUserData } };
};
//https://dev.to/api/users/by_username?url=colbyfayock
