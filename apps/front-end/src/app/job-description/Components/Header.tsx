import React from "react";
import BellIcon from '../../../../public/assets/bellIcon.png';
import ProfileLogo from '../../../../public/assets/profileLogo.png';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-8 bg-[#000] text-white rounded-3xl pl-16">
            <div>
                <div className="font-normal text-5xl font-sans">
                    Xlancr
                </div>
                <div className="font-extralight text-sm tracking-wider">
                    freelancr
                </div>
            </div>
            <div className="flex items-center pr-8">
                <img src={BellIcon.src} alt="bellIcon" className="w-6 h-6 mr-8 rounded-full" />
                <img src={ProfileLogo.src} alt="Profile_logo" className="rounded-full h-12 w-12 mr-4" />
                <span className="mr-1 font-normal text-xl">Name goes here</span>
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
