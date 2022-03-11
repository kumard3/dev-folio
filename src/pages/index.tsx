/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type FormValues = {
  username: string;
};

export default function Home() {

  const [username, setUserName] = React.useState<string | null>("");
  const { register, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!data.username) return;
    setUserName(data.username);
    if (window !== undefined)
      window.location.href = `/portfolio/${data.username}`;
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen ">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col">
        <span className="text-4xl font-mono font-bold">
          Enter Your GitHub username
        </span>
        <input
          {...register("username")}
          className="text-black my-5  py-[.7em]"
        />
        <button
          type="submit"
          className="bg-[#141416]/80 hover:bg-[#141416] py-[.7em] max-w-[10rem] rounded-xl "
        >
          {" "}
          submit
        </button>
        
      </form>
      {/* Card */}
      
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
