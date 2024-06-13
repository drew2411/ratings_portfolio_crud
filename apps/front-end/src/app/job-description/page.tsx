import Header from "./Components/Header";
import JobHeader from "./Components/JobHeader";
import GoogleLogo from '../../../public/assets/googleLogo.png';
import JobAdditionalDetails from "./Components/JobDetailsBar";
import JobDetails from "./Components/JobDetails";
import JobSideBar from "./Components/JobSideBar";

export default function Home() {
  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white pb-10">
      {/* Header Component */}
      <header className="p-4 pt-11 pl-36">
        <Header />
      </header>

      {/* Job Description */}
      <main className="bg-[#000] text-white rounded-3xl min-h-full rounded-3xl ml-36 m-4 mb-0 p-8 ">
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
  );
}
