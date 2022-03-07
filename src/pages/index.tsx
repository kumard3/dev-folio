/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import HeroComponent from "../template-2/components/Hero";


export default function Home() {
  const [username, setUserName] = React.useState<string | null>("");
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const { isValid } = formState;

  const onSubmit = ({ username }) => {
    if (!username) return;
    setUserName(username);
    if (window !== undefined)
      window.location = `/portfolio/${username}`;
  };

  // const onSubmit = (data) => setUserName(data.username);

  console.log(username);
  return (
    <div className="bg-[#141628] min-h-screen text-slate-50 relative ">
      <HeroComponent name="hero" />
      <div className="flex flex-col ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username")} className="text-black" />
          <button type="submit"> submit</button>
        </form>
      </div>
    </div>
  );
}

//https://raw.githubusercontent.com/kumard3/kumard3/main/README.mdexport default function App() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("username")} />

//       <input type="submit" />
//     </form>
//   );
// }
