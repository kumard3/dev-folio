import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

import BottomNav from '../../../components/BottomNav'

import { useLocalStorage } from '../../../helper/useLocalStorage'
import VercelButton2 from '../../../components/VercelButton/VercelButton2'
export default function Portfolio2({ name, bio, githubRepoData }: any) {
  const [items, setItems] = useState('')

  useEffect(() => {
    //@ts-ignore
    const items = JSON.parse(localStorage.getItem('name'))
    if (items) {
      setItems(items)
    }
  }, [])
  const [userData, setUserData] = useLocalStorage<string>('userData', '')
  const [githubRepo, setGithubRepo] = useLocalStorage<string[]>('repo', [])

  useEffect(() => {
    setUserData(name)
    setGithubRepo(githubRepoData)
  }, [])

  return (
    <div>
      <VercelButton2 />
      <div className="relative w-full  container px-4 mx-auto flex flex-col justify-center items-center h-screen -mt-20 ">
        <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="flex flex-col items-start relative ">
          <div className="flex flex-col items-start SpaceGroteskBold text-[28px] md:text-[50px] lg:text-[64px] ">
            <h1>Hello!👋🏻</h1>
            <h1>My name is {name}</h1>
            {/* <h1>
            I'm a Front End <span className="text">Developer</span>
          </h1> */}
          </div>
          <div className="bg-[#60A5FA] h-[120px] top-[200px] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

          <div className="SpaceGroteskRegular text-[16px] md:text-[20px] lg:text-[24px] py-5">
            <p>{bio}</p>
          </div>
          <>
            <a
              href={`https://github.com/${items}`}
              target="_blank"
              className="relative block group  my-7 ml-4 cursor-pointer"
              rel="noreferrer"
            >
              <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
              <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
                <div className="py-3 px-10 ">
                  <p className="mt-1 text-xl">Say Hello</p>
                </div>
              </div>
            </a>
          </>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const githubUser = await fetch(
    //@ts-ignore
    `https://api.github.com/users/${params.username}`,
  )
  const githubRepo = await fetch(
    //@ts-ignore
    `https://api.github.com/users/${params.username}/repos?per_page=20`,
  )
  const { name, bio } = await githubUser.json()
  const githubRepoData = await githubRepo.json()
  return { props: { name, bio, githubRepoData } }
}
