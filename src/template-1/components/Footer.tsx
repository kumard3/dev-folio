
interface Props {
	username: string;
}

export default function Footer({ username }:Props) {
  return (
    <footer id="footer" className="text-center  py-20 font-mono">
      <h1 >© 2022 {username}</h1>
      <h1 className="mt-5">Powered by DevFolio</h1>
    </footer>
  );
}
