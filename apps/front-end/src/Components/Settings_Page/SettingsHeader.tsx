import React from "react";

interface SettingsHeaderProps {
    title: string;
    description: string;
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title, description }) => {
    return (
        <header className="pl-8 pb-4 w-full border-b-2 border-[#1e1e1e]">
            <h1 className="pb-1 font-semibold text-4xl">
                {title}
            </h1>
            <p className="text-lg font-normal pb-1">
                {description}
            </p>
        </header>
    );
};

export default SettingsHeader;
