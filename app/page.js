import Image from "next/image";
import Navbar from "./component/navbar";
import Bandhan from "./assets/bandhan.jpeg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Image src={Bandhan} alt="Bnadhan" className="w-full" />
    </>
  );
}
