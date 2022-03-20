import React, { FC } from "react";
import { useSelector } from "react-redux";
import DashboardButtons from "./navigation/DashboardButtons";
import DashboardButtonsRemade from "./navigation/DashboardButtonsRemade";

const StringleIcon = require("../assets/images/logo.svg") as string;

interface Props {
  passType: (content: string) => void;
}

const NavigationLeft = ({ passType }: Props) => {
  const handleContentType = (contentType: string) => {
    passType(contentType);
  };

  /* */

  return (
    <div className=" h-[100%] w-[313px] bg-white flex flex-col font-poppins">
      <div className=" relative flex flex-col items-end top-[48px] w-[auto] gap-[124px] ">
        <div className="relative flex flex-row right-[48px] gap-[27px]">
          <img src={StringleIcon}></img>
          <span className=" font-semibold text-[27px]">Stringle</span>
        </div>
        <div className="relative">
          {/*<DashboardButtons handleContent={handleContentType} />
           */}
          <DashboardButtonsRemade handleContent={handleContentType} />
        </div>
      </div>
    </div>
  );
};

export default NavigationLeft;
