"use client";

import React, { useState } from "react";

import Sidebar from '@/Components/Dashboard/Sidebar';
import Header from '@/Components/Dashboard/Header';
import SettingsSideBar from '@/Components/Settings_Page/SettingsSideBar';
import GeneralDetails from "@/Components/Settings_Page/GeneralDetails";
import UserPermission from "@/Components/Settings_Page/UserPermission";
import Billing from "@/Components/Settings_Page/Billing";
import Plans from "@/Components/Settings_Page/Plans";
import Notification from "@/Components/Settings_Page/Notification";
import ThemePreferences from "@/Components/Settings_Page/ThemePreferences";
import Language from "@/Components/Settings_Page/Language";

const Settings: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Notification");

  const renderContent = () => {
    switch (selectedPage) {
      case "General Details":
        return <GeneralDetails />;
      case "User Permission":
        return <UserPermission />;
      case "Billing":
        return <Billing />;
      case "Plans":
        return <Plans />;
      case "Notification":
        return <Notification />;
      case "Theme Preferences":
        return <ThemePreferences />;
      case "Language":
        return <Language />;
      default:
        return <Notification />;
    }
  };

  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white pb-12 flex relative">
      {/* Sidebar */}
      <div className="fixed top-0 left-2">
        <Sidebar />
      </div>

      <div className="pl-24 w-full">
        {/* Header Component */}
        <header className="p-4 pt-11">
          <Header />
        </header>

        {/* Job Description */}
        <main className="bg-[#000] text-white rounded-3xl rounded-3xl m-4 mb-0 p-8 ">
          <h1 className='text-3xl font-semibold w-full h-20 border-b-2 border-[#1e1e1e]'>Settings</h1>

          <section className="flex">
            {/* Settings Sidebar */}
            <nav className='h-full w-[20%] pt-4'>
              <SettingsSideBar onSelect={setSelectedPage} />
            </nav>

            {/* Settings Main */}
            <section className="flex-grow p-4 border-l-2 border-[#1e1e1e]">
              {renderContent()}
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Settings;