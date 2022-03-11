import ReactMarkdown from "react-markdown/with-html";

interface Props {
  data: string;
}
export default function About({ data }: Props) {
  return (
    <div id="about">
      <h1 className=" text-5xl p-10   font-semibold text-start font-mono">
        About Me
      </h1>

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center  max-w-6xl ">
          <ReactMarkdown allowDangerousHtml>{data}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
