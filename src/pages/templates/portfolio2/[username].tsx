import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

import BottomNav from '../../../components/BottomNav'
import Hero from '../../../components/template-2/components/Hero'

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
      <Hero name={name} bio={bio} />
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
