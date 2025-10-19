import Head from "next/head";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TitleCourses from "./components/TitleCourses";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=, initial-scale=1.0"/>
          <title>UTFPR - SISTEMAS DE INFORMAÇÃO</title>
      </Head>
      <div className = "m-auto font-sans bg-[#1e1e1e]">
          <Header/>

          <Banner/>

          <TitleCourses/>

          <Courses/>

          <Footer/>
      </div>
    </>
  );
}
