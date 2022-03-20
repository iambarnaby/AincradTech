import React, { useEffect, useState } from "react";

const DashboardIcon = require("../../assets/images/Dashboard.svg") as string;
const ClassesIcon = require("../../assets/images/Classes.svg") as string;
const ResourcesIcon = require("../../assets/images/Resources.svg") as string;

interface Props {
  handleContent: Function;
}

const DashboardButtonsRemade = ({ handleContent }: Props) => {
  const [buttonState, changeButtonState] = useState({
    activeButton: { button: "Dashboard" },
    buttons: [
      { button: "Dashboard", image: DashboardIcon },
      { button: "Classes", image: ClassesIcon },
      { button: "Resources", image: ResourcesIcon },
    ],
  });
  useEffect(() => {
    handleContent(buttonState.activeButton.button);
  }, [buttonState.activeButton]);

  const setActiveButton = (index: number) => {
    changeButtonState({
      ...buttonState,
      activeButton: buttonState.buttons[index],
    });
  };

  const setActiveStyle = (index: number) => {
    if (buttonState.buttons[index].button === buttonState.activeButton.button) {
      return "opacity-100";
    } else {
      return "opacity-50";
    }
  };

  return (
    <div className="nav flex flex-col gap-[56px]">
      {buttonState.buttons.map((buttons, index) => (
        <div
          className={`${setActiveStyle(
            index
          )} w-[222px] flex flex-row cursor-pointer transition-all`}
          onClick={() => setActiveButton(index)}
        >
          <img src={buttons.image}></img>
          <div className="w-[100%] flex pl-[42px] font-medium text-[17px]">
            {buttons.button}
          </div>
          <div
            className={`border-[#5E81F4] bg-[#5E81F4] border-[1.5px] rounded opacity-0 transition-all ${setActiveStyle(
              index
            )}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default DashboardButtonsRemade;
