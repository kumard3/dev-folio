import ReactMarkdown from "react-markdown/with-html";

interface Props {
  data: string;
}
export default function About({ data }: Props) {
  return (
    <div id="about" className="container mx-auto flex flex-col justify-center items-center">
      <h1 className=" text-5xl p-10 font-semibold text-start w-full font-mono">
        About Me
      </h1>

      <div className="flex flex-col items-center max-w-8xl justify-center px-2 sm:p-0">
        <ReactMarkdown allowDangerousHtml>{data}</ReactMarkdown>
      </div>
    </div>
  );
}
