import {
  FiChevronsUp,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";
import Linking from "next/link";
import { Link } from "react-scroll";
import styles from "./footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <div className="bg-gray-800 text-white flex p-10 items-center justify-between font-mono border-t-4 border-red-400">
      <div className="grid sm:grid-cols-2">
        <div className="flex flex-col lg:text-4xl md:text-3xl sm:text-2xl phone:text-2xl items-center phone:pb-3 ">
          <div className="flex pb-1">
            <Linking href={`https://github.com/hilman72`}>
              <FiGithub className={`cursor-pointer mr-10 ${styles.hover}`} />
            </Linking>
            <Linking href={`https://www.linkedin.com/in/hilmanc`}>
              <FiLinkedin className={`cursor-pointer mr-10 ${styles.hover}`} />
            </Linking>
            <Linking href={`https://www.instagram.com/hilman91112/`}>
              <FiInstagram className={`cursor-pointer mr-10 ${styles.hover}`} />
            </Linking>
            <Linking href={`mailto:hilmandevelop@gmail.com`}>
              <FiMail className={`cursor-pointer ${styles.hover}`} />
            </Linking>
          </div>
          <div>
            <p className="md:text-lg sm:text-base phone:text-sm">
              Let`s Get In Touch!
            </p>
          </div>
        </div>
        <div className="flex self-center pl-7">
          <p className="text-xs">
            Copyright © 2021 HilmanC. <br />
            All Rights Reserved
          </p>
        </div>
      </div>

      <div
        className={` lg:text-4xl md:text-3xl bg-red-400 flex p-2 rounded-t-full ${styles.top}`}
      >
        <Link activeClass="active" to="banner" spy={true} smooth={true}>
          <FiChevronsUp className={`animate-bounce cursor-pointer`} />
        </Link>
      </div>
    </div>
  );
}
