// import Footer from "./components/common/Footer";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Admission from "./components/Home/Admission";
import Banner from "./components/Home/Banner";
import CoursesSection from "./components/Home/CoursesSection";
import ExclusiveSolutions from "./components/Home/EclusiveSolutions";
import PopularCourses from "./components/Home/PopularCourse";
import SeminarSections from "./components/Home/SeminarSections";
import Service from "./components/Home/Servise";
import StatsSection from "./components/Home/Stats-section";
import SuccessStories from "./components/Home/SuccessStories";
import TrainingLanding from "./components/Home/TrainingLanding";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Service />
      <PopularCourses />
      <StatsSection />
      <SuccessStories />
      <ExclusiveSolutions />
      <CoursesSection />
      <SeminarSections />
      <TrainingLanding />
      <Admission />
      <Footer />
    </>
  );
}
