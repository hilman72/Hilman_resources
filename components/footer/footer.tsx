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
    <div className="bg-gray-800 text-white flex p-10 items-center justify-between font-mono">
      <div className="flex self-end">
        <p className="text-xs">Copyright © 2021 HilmanC. All Rights Reserved</p>
      </div>
      <div className="flex flex-col lg:text-4xl items-center">
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
            <FiMail className={`cursor-pointer mr-10 ${styles.hover}`} />
          </Linking>
        </div>
        <div>
          <p className="text-base">
            Thankyou so much for coming in. Let Get in Touch!
          </p>
        </div>
      </div>
      <div
        className={` lg:text-4xl bg-red-400 flex p-2 rounded-t-full ${styles.top}`}
      >
        <Link activeClass="active" to="banner" spy={true} smooth={true}>
          <FiChevronsUp className={`animate-bounce cursor-pointer`} />
        </Link>
      </div>
    </div>
  );
}
