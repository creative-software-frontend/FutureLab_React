import Banner from "@/components/Internship/Banner";
import CourseTab from "@/components/Internship/CourseTab";
import OverviewSection from "@/components/Internship/Overview";
import WhyChooseSection from "@/components/Internship/WhyChooseSection";


const InternshipPage = () => {
    return (
        <div>
            <Banner/>
          <OverviewSection/>
          <CourseTab/>
          <WhyChooseSection/>
        </div>
    );
};

export default InternshipPage;