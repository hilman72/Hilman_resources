import { BsPeopleCircle } from "react-icons/bs";
import { SiMinutemailer, SiHomeassistant } from "react-icons/si";
import { VscFileSubmodule } from "react-icons/vsc";
import { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import { Link } from "react-scroll";

export default function Navbar(): JSX.Element {
  const [mouse1, setMouse1] = useState(false);
  const [mouse2, setMouse2] = useState(false);
  const [mouse3, setMouse3] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const height = window.innerHeight;
    window.addEventListener("scroll", () => {
      if (window.scrollY < height + 50) {
        setFixed(false);
      } else {
        setFixed(true);
      }
    });
  }, [fixed]);

  return (
    <div
      className={`z-50 overflow-x-hidden bg-gray-800 text-white max-w-screen font-mono flex justify-between border-b-4 border-red-400 ${
        fixed ? `${styles.fix} ` : ""
      }`}
    >
      <div className="py-3 lg:px-3 md:px-2 md:ml-60 sm:ml-28 phone:ml-12 cursor-pointer">
        <Link activeClass="active" to="banner" spy={true} smooth={true}>
          <SiHomeassistant className=" sm:text-3xl phone:text-2xl" />
        </Link>
      </div>
      <div className="py-3 lg:px-3 md:px-2 lg:mr-40 md:mr-20 sm:mr-12 phone:mr-2">
        <li className="flex">
          <p
            onMouseEnter={() => setMouse1(true)}
            onMouseLeave={() => setMouse1(false)}
            className="lg:w-40 md:w-32 sm:w-28 phone:w-16 flex justify-center cursor-pointer"
          >
            {mouse1 ? (
              <p
                className={`md:text-2xl  sm:text-lg phone:text-sm ${
                  mouse1 ? `${styles.pop}` : ""
                }`}
              >
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                >
                  About
                </Link>
              </p>
            ) : (
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
              >
                <BsPeopleCircle className="lg:text-3xl md:text-3xl sm:text-3xl phone:text-2xl" />
              </Link>
            )}
          </p>
          <p
            onMouseEnter={() => setMouse2(true)}
            onMouseLeave={() => setMouse2(false)}
            className="lg:w-40 md:w-32 sm:w-28 phone:w-16 flex justify-center cursor-pointer"
          >
            {mouse2 ? (
              <p
                className={`md:text-2xl sm:text-lg phone:text-sm  ${
                  mouse2 ? `${styles.pop}` : ""
                }`}
              >
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                >
                  Project
                </Link>
              </p>
            ) : (
              <Link activeClass="active" to="project" spy={true} smooth={true}>
                <VscFileSubmodule className="lg:text-3xl md:text-3xl sm:text-3xl phone:text-xl" />
              </Link>
            )}
          </p>
          <p
            onMouseEnter={() => setMouse3(true)}
            onMouseLeave={() => setMouse3(false)}
            className="lg:w-40 md:w-32 sm:w-28 phone:w-16 flex justify-center cursor-pointer"
          >
            {mouse3 ? (
              <p
                className={`md:text-2xl sm:text-lg phone:text-sm  ${
                  mouse3 ? `${styles.pop}` : ""
                }`}
              >
                <Link activeClass="active" to="footer" spy={true} smooth={true}>
                  Contact
                </Link>
              </p>
            ) : (
              <Link activeClass="active" to="footer" spy={true} smooth={true}>
                <SiMinutemailer className="lg:text-3xl md:text-3xl sm:text-3xl phone:text-2xl" />
              </Link>
            )}
          </p>
        </li>
      </div>
    </div>
  );
}
