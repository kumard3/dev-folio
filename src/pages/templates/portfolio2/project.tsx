/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import VercelButton2 from '../../../components/VercelButton/VercelButton2'
import BottomNav from '../../../components/BottomNav'

export default function Project() {
  const [data, setData] = React.useState<string[] | null>([])

  useEffect(() => {
    //@ts-ignore
    const userName = JSON.parse(localStorage.getItem('repo'))
    if (userName) {
      setData(userName)
    }
  }, [])
  console.log(data)
  return (
    <>
       <VercelButton2 />
      <div className="container mx-auto flex flex-col justify-center h-full w-full relative px-3">
        <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="py-10  relative">
          <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

          <div className="flex flex-col items-start">
            <h1 className="SpaceGroteskBold text-5xl">Projects 💡</h1>

            <p className="SpaceGroteskRegular text-[24px]">
              Some things i've been working on in the past few years:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap justify-center items-center">
            {data!.map((n: any, index: React.Key | null | undefined) => {
              return (
                <>
                  <div
                    key={index}
                    className="max-w-full sm:w-[400px] mx-4 bg-[#23262F] m-3  py-3 rounded-xl"
                  >
                    <div className="grid flex-col px-4 py-3">
                      <div className="flex justify-between px-3 py-2">
                        <div className="flex justify-center items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50px"
                            height="50px"
                            viewBox="0 0 24 24"
                            role="presentation"
                          >
                            <g transform="translate(2 2)">
                              <path
                                d="M14.884,3.115H11.941a2.429,2.429,0,0,1-1.894-.887L9.078.888A2.367,2.367,0,0,0,7.193,0H5.113C1.378,0,0,2.192,0,5.919V9.947c0,.443,20,.442,20,0V8.776C20.015,5.049,18.672,3.115,14.884,3.115Z"
                                fill="currentColor"
                                opacity="0.4"
                              ></path>
                              <path
                                d="M14.367,16.9h0c-.1,0-.207,0-.309-.008H5.931c-.1.005-.2.008-.307.008a6.017,6.017,0,0,1-4.068-1.578,4.487,4.487,0,0,1-.667-.887,5.8,5.8,0,0,1-.782-2.183A8.148,8.148,0,0,1,0,10.93V5.677A12.144,12.144,0,0,1,.071,4.363c.01-.076.025-.151.04-.224a1.894,1.894,0,0,0,.049-.37A5.619,5.619,0,0,1,.649,2.252C1.353.747,2.808.015,5.095.015h9.78c.133-.01.269-.016.4-.016A5.241,5.241,0,0,1,18.5,1.116a2.78,2.78,0,0,1,.329.329,3.935,3.935,0,0,1,.729,1.269A8.51,8.51,0,0,1,20,5.677V10.93a9.441,9.441,0,0,1-.1,1.322,5.961,5.961,0,0,1-.8,2.183,4.445,4.445,0,0,1-.676.887A5.983,5.983,0,0,1,14.367,16.9Zm-9.4-8.11a.825.825,0,1,0,0,1.651H15.09a.826.826,0,0,0,.825-.8.742.742,0,0,0-.177-.533.788.788,0,0,0-.623-.319Z"
                                transform="translate(0 3.099)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div className="flex justify-around items-center w-1/3  ">
                          <a
                            aria-label="GitHub Link"
                            href={n.html_url}
                            className="cursor-pointer"
                            target={`_blank`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              viewBox="0 0 438.549 438.549"
                              className="h-7"
                              fill="currentColor"
                            >
                              <title>GitHub</title>
                              <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path>
                            </svg>
                          </a>
                          <a
                            href={n.homepage}
                            aria-label="External Link"
                            className="cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              viewBox="0 0 194.818 194.818"
                              className="h-7"
                              fill="currentColor"
                            >
                              <title>External</title>
                              <g>
                                <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                                <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="max-w-full py-6">
                        <h1 className="text-xl font-bold font-mono">
                          {n.name}
                        </h1>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex justify-around max-w-md">
                          {/* stars */}
                          {n.stargazers_count === 0 ? (
                            ''
                          ) : (
                            <div className="flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                role="presentation"
                                className="mr-2"
                              >
                                <g transform="translate(2.5 3)">
                                  <path
                                    d="M10.214.441,12.53,5.1a.8.8,0,0,0,.6.437l5.185.749a.8.8,0,0,1,.528.306.77.77,0,0,1-.085,1.032L15,11.258a.762.762,0,0,0-.226.7l.9,5.128a.787.787,0,0,1-.652.892.868.868,0,0,1-.516-.08L9.888,15.478a.776.776,0,0,0-.742,0L4.494,17.912a.812.812,0,0,1-1.077-.33.8.8,0,0,1-.081-.5l.9-5.128a.788.788,0,0,0-.226-.7L.232,7.621a.786.786,0,0,1,0-1.112l0,0a.909.909,0,0,1,.452-.222L5.87,5.534a.812.812,0,0,0,.6-.438L8.784.441a.787.787,0,0,1,.458-.4.8.8,0,0,1,.61.044A.82.82,0,0,1,10.214.441Z"
                                    transform="translate(0 0)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.5px"
                                  ></path>
                                </g>
                              </svg>
                              {n.stargazers_count}
                            </div>
                          )}

                          {/* forks */}
                          {n.forks === 0 ? (
                            ''
                          ) : (
                            <div className="flex justify-center items-center ">
                              <svg
                                aria-label="forks"
                                viewBox="0 0 10 16"
                                version="1.1"
                                width="10"
                                height="16"
                                role="img"
                                className="mr-2"
                              >
                                <path
                                  fill="white"
                                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                                ></path>
                              </svg>
                              {n.forks}
                            </div>
                          )}
                        </div>
                        {n.language === null ? (
                          <h1 className="font-mono opacity-0">language</h1>
                        ) : (
                          <h1 className="font-mono">{n.language}</h1>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  )
}
