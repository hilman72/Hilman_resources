import styles from "./about.module.scss";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function About(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <div className="lg:mx-60 sm:mx-20 phone:mx-8 lg:pt-52 md:pt-48 sm:pt-40 phone:pt-32 pb-20 grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="flex justify-center items-center">
          <div>
            <img src="/images/me.jpg" alt="me" className={`${styles.icon}`} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center font-mono">
          <div
            className={`lg:text-7xl md:text-6xl sm:text-5xl phone:text-4xl ${styles.header}`}
          >
            About
          </div>
          <hr
            className="bg-red-400"
            style={{
              height: "0.3rem",
              width: "8rem",
            }}
          />
          <br />
          <br />
          <div className="font-bold lg:text-2xl md:text-xl phone:text-lg">
            Who is "Hilman"?
          </div>
          <br />
          <div className="lg:mx-12 md:mx-8 max-w-md lg:text-xl md:text-lg phone:text-sm">
            A Full-Stack Software Engineer from Hong Kong. You can also call me
            "Human". I started in tech from a Bootcamp. Trying to build a
            Start-up Now.{" "}
          </div>
          <br />
          <br />
          <br />
          <div className="flex lg:text-4xl md:text-3xl sm:text-3xl phone:text-2xl  ">
            <Link href={`https://github.com/hilman72`}>
              <FiGithub className={`cursor-pointer mr-6 ${styles.hover}`} />
            </Link>
            <Link href={`https://www.linkedin.com/in/hilmanc`}>
              <FiLinkedin className={`cursor-pointer mr-6 ${styles.hover}`} />
            </Link>
            <Link href={`https://www.instagram.com/hilman91112/`}>
              <FiInstagram className={`cursor-pointer mr-6 ${styles.hover}`} />
            </Link>
            <Link href={`mailto:hilmandevelop@gmail.com`}>
              <FiMail className={`cursor-pointer mr-6 ${styles.hover}`} />
            </Link>
          </div>
          <br />
          <br />
          <div className="md:mx-4 sm:mx-10 max-w-md text-gray-300 md:text-xl phone:text-sm ">
            "Great things come from hard work and perseverance. No excuses."{" "}
            <br />- Kobe Bryant -
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
