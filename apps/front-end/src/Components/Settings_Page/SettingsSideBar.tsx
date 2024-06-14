"use client";

import React, { useState } from "react";

const SettingsSideBar: React.FC<{ onSelect: (page: string) => void }> = ({ onSelect }) => {
    const [selected, setSelected] = useState<string>("Notification");

    const handleClick = (item: string) => {
        setSelected(item);
        onSelect(item);
    };

    const buttons = [
        "General Details",
        "User Permission",
        "Billing",
        "Plans",
        "Notification",
        "Theme Preferences",
        "Language",
    ];

    return (
        <ul>
            {buttons.map((button, index) => (
                <li key={index}>
                    <button
                        className={`w-full ${
                            selected === button ? "bg-[#1e1e1e]" : "hover:bg-[#1e1e1e]"
                        } font-semibold text-lg py-3 flex pl-4`}
                        onClick={() => handleClick(button)}
                    >
                        {button}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default SettingsSideBar;
