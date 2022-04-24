/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function TemplateName() {
  const [items, setItems] = useState('')
  const router = useRouter()
  const { username } = router.query
  console.log(username)
  const templateSelected = [
    {
      title: 'Template 1',
      url: `/templates/portfolio1/`,
      usernames: `${items}`,
      image:
        'https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650175276/template1_x0eqp8.jpg',
    },
    {
      title: 'Template 2',
      url: `/templates/portfolio2/`,
      usernames: `${items}`,
      image:
        'https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650175148/template-8-min_x2ynj2.jpg',
    },
  ]

  useEffect(() => {
    //@ts-ignore
    const items = JSON.parse(localStorage.getItem('name'))
    if (items) {
      setItems(items)
    }
  }, [])
  console.log(items)
  const onSubmit = (username: any, url: string) => {
    if (!username) return
    if (window !== undefined) window.location.href = `${url}${items}`
  }

  return (
    <>
      <Head>
        <title>DevFolio-Template</title>
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
          content="https://devfolio.kumard3.me/ogImageTemplate.png"
        />
        <meta
          name="twitter:image"
          content="https://devfolio.kumard3.me/ogImageTemplate.png"
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
          content="https://devfolio.kumard3.me/ogImageTemplate.png"
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
          content="https://devfolio.kumard3.me/ogImageTemplate.png"
        />
        <meta name="robots" content="Index" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <h1 className="text-5xl text-center py-10 font-mono font-bold">
        Select a template
      </h1>
      <div className="flex justify-around flex-wrap">
        {templateSelected.map((n, index) => {
          return (
            <>
              <section
                key={index}
                onClick={() => {
                  onSubmit(username, n.url)
                }}
                className="container cursor-pointer bg-[#111111] mx-auto max-w-lg 2xl:max-w-xl overflow-hidden  scrollbar-none my-5 "
              >
                <div className=" mx-1 flex flex-col   border-gray-500  border relative rounded">
                  <div className="flex-1 flex justify-center items-center overflow-hidden p-2  ">
                    <img
                      src={n.image}
                      loading="lazy"
                      alt="Template"
                      width="100%"
                      height="100%"
                      className="rounded"
                    />
                  </div>

                  <div className="h-12 flex justify-between items-center shrink-0  border-gray-500  border-t">
                    <h1 className=" md:text-xl font-bold ml-10 ">{n.title} </h1>
                    <nav className="flex shrink-0 divide-x border-gray-500  border-l">
                      <div
                        title="Display preview "
                        className="action focus-on-key flex justify-center items-center w-12 h-12 border-gray-500  border-b hover:text-sky-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-5 h-auto"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                      </div>
                    </nav>
                  </div>
                </div>
              </section>
            </>
          )
        })}
      </div>
    </>
  )
}
