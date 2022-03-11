interface Props {
  name: string;
  image: string;
  summary: string;
}

export default function HeroComponent({ name, image, summary }: Props) {
  return (
    <section id="home">
      <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between container max-auto">
        <div className="flex flex-col justify-center p-6 text-center  lg:text-left">
          <>
          <p className="font-mono text-[#FC4370]">Welcome, I'm</p>
            <div className="my-[.7rem] ">
              <h1 className="text-5xl font-bold  sm:text-7xl">{name}</h1>
            </div>
            <div className="my-[1rem]">
              <p className=" text-gray-400 max-w-md">{summary}</p>
            </div>
          </>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#work"
              className="px-8 py-3 text-lg font-semibold rounded bg-[#FC4370]"
            >
              See my work
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center  mt-8  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={image}
            alt=""
            className="object-contain h-72 sm:h-80 border-[5px] border-[#FC4370] rounded-full  "
          />
        </div>
      </div>
    </section>
  );
}
//background-color: #fc9842;
// background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%); border-[#FC4370] 