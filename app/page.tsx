import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="group mt-5 border-solid border-blue-400 border-2 p-4 text-4xl xl:text-7xl rounded-xl hover:border-blue-700 hover:shadow-md hover:shadow-blue-500 hover:-translate-y-0.5">
          <p>Hi,</p>
          <p>
            My Name is <span className="group-hover:text-blue-700">Joyel</span>
          </p>
          <div className="text-4xl flex justify-center space-x-8 mt-4">
            <span className="hover:text-blue-700">
              <Link href={"https://www.linkedin.com/in/joyel-dsilva/"}><AiFillLinkedin /></Link>
            </span>
            <span className="hover:text-blue-700">
              <Link href={"https://github.com/Joyel1441"}><AiFillGithub /></Link>
            </span>
            <span className="hover:text-blue-700">
              <Link href={"https://www.instagram.com/zoominggeek/"}><AiFillInstagram /></Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
