import { data } from "autoprefixer";
import React from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const { results } = useSelector((state) => state.data);
  console.log(results.latestResults.technology);
  return (
    <div className="flex pl-[42px] pt-[118px] gap-[39px] font-poppins">
      {/* */}

      <div className=" bg-white rounded-[17px] h-[465px] w-[430px] pt-[31px] px-[32px] grid grid-rows-[auto_3fr] grid-cols-2 gap-y-[18px]">
        <div className=" font-medium text-[17px]">Latest Results</div>

        <div className="flex justify-end items-center font-regular text-[16px] gap-3 cursor-pointer">
          more
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.416 3.60468L12.83 1.01935C12.705 0.894368 12.5354 0.824158 12.3587 0.824158C12.1819 0.824158 12.0124 0.894368 11.8873 1.01935C11.7624 1.14437 11.6921 1.31391 11.6921 1.49068C11.6921 1.66746 11.7624 1.837 11.8873 1.96202L14.2573 4.33335H0.666667C0.489856 4.33335 0.320286 4.40359 0.195262 4.52861C0.0702379 4.65364 0 4.8232 0 5.00002H0C0 5.17683 0.0702379 5.3464 0.195262 5.47142C0.320286 5.59644 0.489856 5.66668 0.666667 5.66668H14.298L11.8873 8.07668C11.8253 8.1386 11.7762 8.21212 11.7426 8.29306C11.7091 8.37399 11.6918 8.46074 11.6918 8.54835C11.6918 8.63596 11.7091 8.72271 11.7426 8.80364C11.7762 8.88457 11.8253 8.9581 11.8873 9.02002C12.0124 9.145 12.1819 9.21521 12.3587 9.21521C12.5354 9.21521 12.705 9.145 12.83 9.02002L15.4167 6.43402C15.7906 6.05813 16.0005 5.54943 16.0004 5.01921C16.0002 4.48899 15.7901 3.98039 15.416 3.60468Z"
              fill="#111026"
            />
          </svg>
        </div>

        <div className=" col-span-2">
          <div className=" flex flex-col children:border-b-[1.5px] children:border-black">
            {results.latestResults.map((classes, index: number) => (
              <div
                className={`flex text-[16px] font-semibold w-[100%] pb-[27px] pt-[25px] ${
                  index < results.latestResults.length - 1
                    ? " "
                    : " !border-b-0"
                }
                `}
              >
                {"Unit " +
                  classes.resultsByUnit[classes.resultsByUnit.length - 1].unit +
                  " -"}
                <div className="opacity-[50%] ml-1">{classes.name}</div>
                <div
                  className={`ml-[auto] ${
                    classes.resultsByUnit[classes.resultsByUnit.length - 1]
                      .percentage <= 25
                      ? " text-[#FF808B]"
                      : "text-[#5E81F4]"
                  }`}
                >
                  {classes.resultsByUnit[classes.resultsByUnit.length - 1]
                    .percentage + "%"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* */}

      <div className=" w-[558px] h-[465px] bg-white rounded-[17px]">
        Time Spend on Learning
      </div>
    </div>
  );
};

export default DashboardPage;
