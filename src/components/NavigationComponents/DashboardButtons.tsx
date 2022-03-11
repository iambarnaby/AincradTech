import React, { FC, useEffect, useState } from "react";

interface IisSelected {
  one: boolean;
  two: boolean;
  three: boolean;
}
const DashboardButtons: FC = () => {
  const [isSelected, setIsSelected] = useState({
    one: true,
    two: false,
    three: false,
  });
  const [currButton, setCurrButton] = useState("dashboardButton");

  const [prevButton, setPrevButton] = useState("");

  useEffect(() => {
    handleButtonChange(currButton, prevButton);
  }, [currButton]);

  const handleButtonChange = (currButton: string, prevButton: string) => {
    const elem = [
      document.getElementById(currButton) as HTMLElement,
      document.getElementById(currButton + "Tab") as HTMLElement,
    ];
    elem[0].style.opacity = "1";
    elem[1].style.opacity = "1";
    if (prevButton) {
      const prevElem = [
        document.getElementById(prevButton) as HTMLElement,
        document.getElementById(prevButton + "Tab") as HTMLElement,
      ];
      prevElem[0].style.opacity = "0.5";
      prevElem[1].style.opacity = "0";
    }
  };

  return (
    <div className="nav flex flex-col gap-[56px]">
      <div
        onClick={() => {
          setPrevButton(currButton);
          setCurrButton("dashboardButton");
        }}
        id="dashboardButton"
        className=" w-[222px] flex flex-row cursor-pointer opacity-50 transition-all"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.121 9.06899L15.536 1.48299C14.5973 0.546978 13.3257 0.0213623 12 0.0213623C10.6743 0.0213623 9.40277 0.546978 8.46401 1.48299L0.879012 9.06899C0.599437 9.34677 0.377782 9.67729 0.226895 10.0414C0.0760072 10.4055 -0.0011104 10.7959 1.20795e-05 11.19V21.007C1.20795e-05 21.8026 0.316083 22.5657 0.878692 23.1283C1.4413 23.6909 2.20436 24.007 3.00001 24.007H21C21.7957 24.007 22.5587 23.6909 23.1213 23.1283C23.6839 22.5657 24 21.8026 24 21.007V11.19C24.0011 10.7959 23.924 10.4055 23.7731 10.0414C23.6222 9.67729 23.4006 9.34677 23.121 9.06899ZM15 22.007H9.00001V18.073C9.00001 17.2773 9.31608 16.5143 9.87869 15.9517C10.4413 15.3891 11.2044 15.073 12 15.073C12.7957 15.073 13.5587 15.3891 14.1213 15.9517C14.6839 16.5143 15 17.2773 15 18.073V22.007ZM22 21.007C22 21.2722 21.8947 21.5266 21.7071 21.7141C21.5196 21.9016 21.2652 22.007 21 22.007H17V18.073C17 16.7469 16.4732 15.4751 15.5355 14.5375C14.5979 13.5998 13.3261 13.073 12 13.073C10.6739 13.073 9.40216 13.5998 8.46448 14.5375C7.5268 15.4751 7.00001 16.7469 7.00001 18.073V22.007H3.00001C2.7348 22.007 2.48044 21.9016 2.29291 21.7141C2.10537 21.5266 2.00001 21.2722 2.00001 21.007V11.19C2.00094 10.925 2.1062 10.671 2.29301 10.483L9.87801 2.89999C10.4417 2.33892 11.2047 2.02393 12 2.02393C12.7953 2.02393 13.5583 2.33892 14.122 2.89999L21.707 10.486C21.8931 10.6732 21.9983 10.926 22 11.19V21.007Z"
            fill="#5E81F4"
          />
        </svg>
        <div className="w-[100%] flex pl-[42px] font-medium text-[17px]">
          Dashboard
        </div>
        <div
          id="dashboardButtonTab"
          className="border-[#5E81F4] bg-[#5E81F4] border-[1.5px] rounded opacity-0 transition-all"
        ></div>
      </div>

      <div
        onClick={() => {
          setPrevButton(currButton);
          setCurrButton("classesButton");
        }}
        id="classesButton"
        className=" w-[222px] flex flex-row cursor-pointer opacity-50 transition-all"
      >
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 2H12.472C12.3173 2.00102 12.1645 1.96682 12.025 1.9L8.869 0.316C8.45239 0.108545 7.9934 0.000386341 7.528 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V7C23.9984 5.67441 23.4711 4.40356 22.5338 3.46622C21.5964 2.52888 20.3256 2.00159 19 2ZM5 2H7.528C7.68266 1.99898 7.83552 2.03318 7.975 2.1L11.131 3.679C11.5472 3.88819 12.0062 3.99806 12.472 4H19C19.598 4.00098 20.1821 4.18067 20.6773 4.51601C21.1725 4.85135 21.5561 5.32704 21.779 5.882L2 5.994V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2ZM19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V7.994L22 7.881V17C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20Z"
            fill="#5E81F4"
          />
        </svg>

        <div className="w-[100%] flex pl-[42px] font-medium text-[17px]">
          Classes
        </div>
        <div
          id="classesButtonTab"
          className="border-[#5E81F4] bg-[#5E81F4] border-[1.5px] rounded opacity-0 transition-all"
        ></div>
      </div>

      <div
        onClick={() => {
          setPrevButton(currButton);
          setCurrButton("resourcesButton");
        }}
        id="resourcesButton"
        className=" w-[222px] flex flex-row cursor-pointer opacity-50 transition-all"
      >
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5V20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V5C19.9984 3.67441 19.4711 2.40356 18.5338 1.46622C17.5964 0.528882 16.3256 0.00158786 15 0V0ZM18 5V16H6V2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5ZM4 2.172V16C3.29763 15.9994 2.6076 16.1847 2 16.537V5C2.00009 4.37969 2.19246 3.77466 2.55063 3.2682C2.90881 2.76175 3.41517 2.37877 4 2.172ZM15 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20C2 19.4696 2.21071 18.9609 2.58579 18.5858C2.96086 18.2107 3.46957 18 4 18H18V19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22Z"
            fill="#5E81F4"
          />
        </svg>

        <div className="w-[100%] flex pl-[42px] font-medium text-[17px]">
          Resources
        </div>
        <div
          id="resourcesButtonTab"
          className="border-[#5E81F4] bg-[#5E81F4] border-[1.5px] rounded opacity-0 transition-all"
        ></div>
      </div>
    </div>
  );
};
export default DashboardButtons;
