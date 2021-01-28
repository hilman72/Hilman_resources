import Head from "next/head";
import Link from "next/link";
import Banner from "../components/banner/banner";
import Navbar from "../components/nav/nav";
import About from "../components/about/about";
import Project from "../components/project/project";
import Footer from "../components/footer/footer";

export default function Home(props) {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Hilman-Resources</title>
      </Head>
      <div id="banner">
        <Banner />
      </div>
      <div id="nav">
        <Navbar />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
