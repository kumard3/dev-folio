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
  // const onSubmit = (data) => setUserName(data.username);

  console.log(username);
  return (
    <div className="bg-[#141628] min-h-screen text-slate-50 flex justify-center items-center ">
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
