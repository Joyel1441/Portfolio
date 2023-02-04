import Link from "next/link";

export default function Home() {
  
  return (
    <main>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="border-solid border-blue-400 border-2 p-4 text-4xl xl:text-7xl rounded-xl hover:border-blue-700">
         <p>Hi,</p>
         <p>My Name is <span className="hover:text-blue-700">Joyel</span></p>
         </div>
      </div>
    </main>
  );
}
