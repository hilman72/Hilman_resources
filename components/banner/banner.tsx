import Canvas from "../canvas/canvas";
import styles from "./banner.module.scss";
import { useState, useEffect } from "react";
import Typist from "react-typist";
import debounce from "../../lib/utils/debounce";
import { CgChevronDoubleDown } from "react-icons/cg";
import { Link } from "react-scroll";

export default function Banner(): JSX.Element {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", debounce(handleResize, 250));
  }, [dimensions]);

  return (
    <div className="flex relative h-screen w-screen overflow-x-hidden justify-center">
      <Canvas className="absolute bg-gray-800" />
      <div
        className="absolute bg-gradient-to-b from-black via-grey-900 to-grey-800 bg-opacity-30"
        style={{
          height: dimensions.height,
          width: dimensions.width,
        }}
      />
      <div className={`absolute flex flex-col ${styles.bannerTop}`}>
        <div className={`flex flex-col h-20 mt-40`}>
          <Typist className={`Typist text-white`}>
            <span className="font-mono lg:text-8xl">
              {" "}
              Hi! I`m Human ...oops
            </span>
            <Typist.Backspace count={13} delay={1000} />
            <span className="font-mono lg:text-8xl"> Hilman</span>
            <Typist.Delay ms={1000} />
            <br />
            <br />
            <p className="font-mono lg:text-2xl">
              {" "}
              A Dedicated Full-Stack Software Engineer
            </p>
          </Typist>
        </div>
        <div className="text-white mt-60 lg:text-7xl animate-bounce">
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            <CgChevronDoubleDown
              className={`cursor-pointer mr-6 ${styles.hover}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
