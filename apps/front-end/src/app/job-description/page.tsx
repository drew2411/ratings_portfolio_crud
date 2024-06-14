import Header from "./Components/Header";
import JobHeader from "./Components/JobHeader";
import GoogleLogo from '../../../public/assets/googleLogo.png';
import JobAdditionalDetails from "./Components/JobDetailsBar";
import JobDetails from "./Components/JobDetails";
import JobSideBar from "./Components/JobSideBar";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white pb-12 flex relative">
      {/* Sidebar */}
      <div className="fixed top-0 left-2">
        <Sidebar />
      </div>

      <div className="pl-24">
        {/* Header Component */}
        <header className="p-4 pt-11">
          <Header />
        </header>

        {/* Job Description */}
        <main className="bg-[#000] text-white rounded-3xl rounded-3xl m-4 mb-0 p-8 ">
          {/* Company's and Job Description */}
          <JobHeader
            logoSrc={GoogleLogo.src}
            teamName="Google"
            jobTitle="Angular JS Developer"
            postedTime="3h"
          />

          {/* Job Info */}
          <section className="flex">
            {/* Job Details */}
            <JobDetails />

            {/* Job Sidebar Details */}
            <JobSideBar
              price={340}
              currency="USD"
              completionText="On completion of entire project"
              duration="Less than 3 months"
              clientRating={4.3}
              isVerified={true}
              memberSince={2024}
            />
          </section>

          {/* Job Additional Details */}
          <JobAdditionalDetails
            yearExperience="0-1 Years"
            workingType="Remote Working"
            location="Jakarta"
            workingHours="95 Hours, flexible"
            projectDuration="Less than 3 months"
            requiredSkills={["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Webflow"]}
          />
        </main>
      </div>
    </div>
  );
}
