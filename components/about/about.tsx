import styles from "./about.module.scss";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function About(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-60 pt-52 pb-20 grid lg:grid-cols-2 md:grid-cols-1 gap-4">
        <div className="flex justify-center items-center">
          <div>
            <img src="/images/me.jpg" alt="me" className={`${styles.icon}`} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center font-mono">
          <div className={`lg:text-7xl ${styles.header}`}>About</div>
          <hr
            className="bg-red-400"
            style={{
              height: "0.3rem",
              width: "8rem",
            }}
          />
          <br />
          <br />
          <div className="font-bold lg:text-2xl">Who is "Hilman"?</div>
          <br />
          <div className="mx-12 max-w-md lg:text-xl">
            A Full-Stack Software Engineer from Hong Kong. You can also call me
            "Human". I started in tech from a Bootcamp. Trying to build a
            Start-up Now.{" "}
          </div>
          <br />
          <br />
          <br />
          <div className="flex lg:text-4xl ">
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
          <div className="max-w-md text-gray-300 lg:text-xl ">
            "Great things come from hard work and perseverance. No excuses."{" "}
            <br />- Kobe Bryant -
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
