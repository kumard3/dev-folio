/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GITHUB_API_URL } from '../helper/contansts'
import { useLocalStorage } from '../helper/useLocalStorage'

type FormValues = {
  username: string
}

export default function Home() {
  const [getRateRemaining, setGitRateRemaining] = React.useState()
  const { register, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
  })
  const [name, setName] = useLocalStorage<string>('name', '')

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!data.username) return
    if (window !== undefined && getRateRemaining !== 0)
      window.location.href = `/templates/${data.username}`
    setName(data.username)
  }

  React.useEffect(() => {
    async function GtihubReadMe() {
      const response = await fetch(`${GITHUB_API_URL}/rate_limit`)

      const data = await response.json()
      setGitRateRemaining(data.rate.remaining)
      console.log(data)
    }
    GtihubReadMe()
  }, [])
  return (
    <>
      <Head>
        <title>DevFolio</title>
        <meta
          name="description"
          content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
        />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="DevFolio" />
        <meta
          name="og:description"
          property="og:description"
          content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
        />
        <meta
          property="og:site_name"
          content="DevFolio - Create a portfolio in less than 2 minutes"
        />

        <meta
          name="twitter:card"
          content="DevFolio - Create a portfolio in less than 2 minutes"
        />
        <meta name="twitter:title" content="DevFolio" />
        <meta
          name="twitter:description"
          content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
        />
        <meta name="twitter:site" content="@propernoun" />
        <meta name="twitter:creator" content="@propernounco" />

        <meta
          property="og:image"
          content="https://devfolio.kumard3.me/ogImage.png"
        />
        <meta
          name="twitter:image"
          content="https://devfolio.kumard3.me/ogImage.png"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devfolio.kumard3.me" />
        <meta property="og:title" content="DevFolio" />
        <meta
          property="og:description"
          content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
        />
        <meta
          property="og:image"
          content="https://devfolio.kumard3.me/ogImage.png"
        />
        <meta property="og:site_name" content="DevFolio" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devfolio.kumard3.me" />
        <meta property="twitter:title" content="DevFolio" />
        <meta
          property="twitter:description"
          content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
        />
        <meta
          property="twitter:image"
          content="https://devfolio.kumard3.me/ogImage.png"
        />
        <meta name="robots" content="Index" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="bg-black  text-white  flex justify-center flex-col items-center w-full min-h-screen ">
        <div className="bg-slate-100 rounded-[5px] px-[20px] py-[10px] my-10">
          <img src="/logo.svg" alt="DevFolio logo" />
        </div>

        <h1 className="text-7xl font-bold max-w-5xl text-center my-10 ">
          Just type your username and wait for the magic
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col ">
          <div className="flex flex-col sm:flex-row justify-center items-center my-5">
            <input
              {...register('username')}
              placeholder="GitHub Username"
              className="text-black text-xl font-mono text-center my-5 rounded-xl  sm:w-2/3 px-3 py-[.7em] sm:rounded-l-xl sm:rounded-r-none"
            />
            <button
              type="submit"
              className="bg-[#141416]/80  hover:bg-[#141416] py-[1em] sm:rounded-r-xl sm:rounded-l-none w-[10rem] rounded-xl "
            >
              {' '}
              submit
            </button>
          </div>
        </form>
        <h1 className="font-mono flex flex-col items-center">
          Available requests
          <span>60/{getRateRemaining}</span>
        </h1>
        <footer className="font-mono text-xl py-10 relative">
          Created by{' '}
          <a href="https://github.com/kumard3" target="_blank" rel="noreferrer">
            Kumar Deepanshu
          </a>
        </footer>
      </div>
    </>
  )
}
