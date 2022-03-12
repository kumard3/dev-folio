import React from "react";
import { formatPostDate } from "../../helper";

export default function Blog({ devData }: any) {
  return (
    <div id="blog" className="container mx-auto py-10">
      <h1 className="text-5xl font-mono pl-20 text-start w-full font-semibold">
        My Blog
      </h1>
      <div className="flex flex-col justify-center items-center">
        {devData.map(
          (
            data: {
              title: string;
              published_at: number | string;
              cover_image: string;
              description: string;
              tag_list: string[];
              url: string;
            },
            index: number
          ) => {
            return (
              <a href={data.url} target="_blank" >
                <div
                  key={index}
                  className="flex  my-5 flex-col md:flex-row items-center  overflow-hidden "
                >
                  <div className="flex flex-col gap-2 p-4 lg:p-6 max-w-2xl">
                    <span className="text-[#FB4370] font-mono  ">
                      {formatPostDate(data.published_at)}
                    </span>

                    <h2 className="text-gray-100 text-[40px] font-bold">
                      {data.title}
                    </h2>

                    <p className="text-gray-400 text-[23px]">
                      {data.description}
                    </p>

                    <div className="">
                      {data.tag_list.map((tag, index) => {
                        return (
                          <span
                            key={index}
                            className="inline-block  text-[#e8e8e8] text-sm font-mono font-bold px-2 py-1  mr-2"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  {data.cover_image === null ? (
                    <div className=" flex flex-col md:flex-row items-center px-5 sm:w-[500px] ">
                      <div className=" h-80  w-full  relative">
                        {/* <img
                  src=""
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover object-center rounded-xl  transition duration-200"
                /> */}
                      </div>
                    </div>
                  ) : (
                    <div className=" flex flex-col md:flex-row items-center px-5 sm:w-[500px] ">
                      <div className=" h-80  w-full  relative">
                        <img
                          src={data.cover_image}
                          loading="lazy"
                          alt=""
                          className="w-full h-full object-cover object-center rounded-xl  transition duration-200"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
}
