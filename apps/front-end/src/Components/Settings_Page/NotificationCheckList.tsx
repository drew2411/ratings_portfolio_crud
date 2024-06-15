"use client";

import React from "react";
import { Checkbox } from "../ui/checkbox";

interface NotificationCheckListProps {
  checkboxId: string;
  checkboxClassName?: string;
  label1: string;
  label2: string;
}

const NotificationCheckList: React.FC<NotificationCheckListProps> = ({
  checkboxId,
  checkboxClassName = "dark w-6 h-6 mr-12",
  label1,
  label2
}) => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id={checkboxId} className={checkboxClassName} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={checkboxId}
          className="text-lg font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label1}
        </label>
        <label
          htmlFor={checkboxId}
          className="text-lg font-semibold"
        >
          {label2}
        </label>
      </div>
    </div>
  );
};

export default NotificationCheckList;
