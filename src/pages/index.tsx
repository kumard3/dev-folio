/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import * as React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GITHUB_API_URL } from '../helper/contansts'

type FormValues = {
  username: string
}

export default function Home() {
  const [getRateRemaining, setGitRateRemaining] = React.useState()
  const { register, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!data.username) return
    if (window !== undefined && getRateRemaining !== 0)
      window.location.href = `/portfolio/${data.username}`
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
    <div className="flex justify-center flex-col items-center w-full min-h-screen ">
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
  )
}

//https://raw.githubusercontent.com/kumard3/kumard3/main/README.mdexport default function App() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return ( #141416 #141416 #23262F #141416
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("username")} />

//       <input type="submit" />
//     </form>
//   );
// }
