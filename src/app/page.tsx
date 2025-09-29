import Image from "next/image";

export default function Home() {
  console.log("Seria isso um log? server ou client?");
  
  return (
    <h1 className="text-3xl">Hello, Next.js!</h1>
  );
}
