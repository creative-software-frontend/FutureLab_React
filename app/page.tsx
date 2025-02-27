
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Banner from "./components/Home/Banner";
import PopularCourses from "./components/Home/PopularCourse";
import Service from "./components/Home/Servise";
import StatsSection from "./components/Home/Stats-section";

export default function Home() {
  return (
    <>
     <Header/>
    <Banner/>
    <Service/>
    <PopularCourses/>
    <StatsSection/>
    <Footer/>
    </>
  );
}
