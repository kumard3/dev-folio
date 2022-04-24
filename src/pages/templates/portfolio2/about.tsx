/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import VercelButton2 from '../../../components/VercelButton/VercelButton2'
import { fetchUserReadme } from '../../../lib/UserataFetch'
import BottomNav from '../../../components/BottomNav'

export default function About() {
  const [items, setItems] = useState('')
  const [userName, setUserName] = useState('')
  const [data, setData] = React.useState<string | null>('')
  useEffect(() => {
    //@ts-ignore
    const items = JSON.parse(localStorage.getItem('name'))
    if (items) {
      setItems(items)
    }
  }, [])

  
  useEffect(() => {
    //@ts-ignore
    const userName = JSON.parse(localStorage.getItem('userName'))
    if (userName) {
      setUserName(userName)
    }
  }, [])


  React.useEffect(() => {
    async function GtihubReadMe() {
      const github = await fetchUserReadme(items)

      setData(github)
    }
    GtihubReadMe()
  }, [data])

  return (
    <div  className=" bg-white dark:bg-gradient-to-r dark:from-[#1F2937]  dark:to-[#111827] min-h-screen w-full relative text-gray-600 dark:text-white ">
       <VercelButton2 />
      <BottomNav />

      <div className="container mx-auto flex flex-col items-start px-5 pt-6 max-w-5xl min-h-[182vh] xs:min-h-[170vh] sm:min-h-screen  ">
        <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <h1 className="SpaceGroteskBold text-[50px] sm:text-[64px]">
          About Me 👨‍
        </h1>
        <p className="SpaceGroteskRegular text-[20px] sm:text-[24px] ">
          A brief intro to who i am and how i do what i do:
        </p>
        <h1 className="SpaceGroteskRegular py-5 text-2xl sm:text-4xl ">
          I am{' '}
          <span className=" text-4xl sm:text-6xl SpaceGroteskBold ">
            {userName}
          </span>
        </h1>
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="SpaceGroteskRegular text-[20px] sm:text-[24px]  max-w-5xl mt-3">
          <ReactMarkdown allowDangerousHtml>{data!}</ReactMarkdown>
        </div>
        <>
          <div className="relative block group  my-7 cursor-pointer">
            <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
            <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
              <div className="py-3 px-10 ">
                <p className="mt-1 text-xl">Say Hello</p>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}
