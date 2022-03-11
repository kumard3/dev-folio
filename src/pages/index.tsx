/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GITHUB_API_URL } from "../helper/contansts";
import About from "../template-1/components/About";
import Blog from "../template-1/components/Blog";
type FormValues = {
  username: string;
};

export default function Home() {
  const [getRateRemaining, setGitRateRemaining] = React.useState();
  const { register, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!data.username) return;
    if (window !== undefined && getRateRemaining !== 0)
      window.location.href = `/portfolio/${data.username}`;
  };

  React.useEffect(() => {
    async function GtihubReadMe() {
      const response = await fetch(`${GITHUB_API_URL}/rate_limit`);

      const data = await response.json();
      setGitRateRemaining(data.rate.remaining);
      console.log(data);
    }
    GtihubReadMe();
  }, []);
  return (
    <div className="flex justify-center flex-col items-center w-full min-h-screen ">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col ">
        <span className="text-4xl font-mono font-bold">
          Enter Your GitHub username
        </span>
        <input
          {...register("username")}
          className="text-black my-5 rounded-xl px-3 py-[.7em]"
        />
        <button
          type="submit"
          className="bg-[#141416]/80 hover:bg-[#141416] py-[.7em] max-w-[10rem] rounded-xl "
        >
          {" "}
          submit
        </button>
      </form>
      <h1 className="font-mono flex flex-col items-center">
        Available requests
        <span>60/{getRateRemaining}</span>
      </h1>
    </div>
  );
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
