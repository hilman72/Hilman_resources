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
      <div className="p-3 ml-60 cursor-pointer">
        <Link activeClass="active" to="banner" spy={true} smooth={true}>
          <SiHomeassistant className="lg:text-4xl" />
        </Link>
      </div>
      <div className="p-3 mr-40 ">
        <li className="flex">
          <p
            onMouseEnter={() => setMouse1(true)}
            onMouseLeave={() => setMouse1(false)}
            className="w-40 flex justify-center cursor-pointer"
          >
            {mouse1 ? (
              //   <animated.div style={props}>About Me</animated.div>
              <p className={`lg:text-2xl ${mouse1 ? `${styles.pop}` : ""}`}>
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
                <BsPeopleCircle className="lg:text-3xl" />
              </Link>
            )}
          </p>
          <p
            onMouseEnter={() => setMouse2(true)}
            onMouseLeave={() => setMouse2(false)}
            className="w-40 flex justify-center cursor-pointer"
          >
            {mouse2 ? (
              <p className={`lg:text-2xl ${mouse2 ? `${styles.pop}` : ""}`}>
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
                <VscFileSubmodule className="lg:text-3xl" />
              </Link>
            )}
          </p>
          <p
            onMouseEnter={() => setMouse3(true)}
            onMouseLeave={() => setMouse3(false)}
            className="w-40 flex justify-center cursor-pointer"
          >
            {mouse3 ? (
              <p className={`lg:text-2xl ${mouse3 ? `${styles.pop}` : ""}`}>
                <Link activeClass="active" to="footer" spy={true} smooth={true}>
                  Contact
                </Link>
              </p>
            ) : (
              <Link activeClass="active" to="footer" spy={true} smooth={true}>
                <SiMinutemailer className="lg:text-3xl" />
              </Link>
            )}
          </p>
        </li>
      </div>
    </div>
  );
}
