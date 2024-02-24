import dayjs from "dayjs";

import { IApp } from "./index";
import { useState } from "react";

export const App: React.FC<IApp> = (props: IApp) => {
  const { onChange, onAccept, onCancel, withActions = false } = props;
  const [selectedDay, setSelectedDay] = useState(Number(dayjs().format("DD")));
  const [currentMonth, setcurrentMonth] = useState(
    Number(dayjs().format("M")) - 1
  );
  const [curentYear, setCurentYear] = useState(Number(dayjs().format("YYYY")));

  const daysInCurrentMonth = dayjs().daysInMonth();

  const monthName = () => {
    return dayjs().month(currentMonth).format("MMM");
  };

  const clickOnPrevMonth = () => {
    const count = currentMonth < 1 ? 12 : currentMonth;
    if (currentMonth < 1) {
      setCurentYear(curentYear - 1);
    }
    setcurrentMonth(count - 1);
  };

  const clickOnNextMonth = () => {
    const count = currentMonth > 10 ? -1 : currentMonth;
    if (currentMonth >= 11) {
      setCurentYear(curentYear + 1);
    }
    setcurrentMonth(count + 1);
  };

  const handleClickOnDay = (day: number) => {
    if (onChange) {
      onChange(day);
    }
    setSelectedDay(day);
  };

  const days = Array.from(
    { length: daysInCurrentMonth },
    (_, index) => index + 1
  );

  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  return (
    <div
      className="bg-white rounded-md p-8 font-mono"
      style={{
        width: "437px",
        boxShadow: "0px 8px 24px 0px rgba(84, 89, 115, 0.06)",
      }}
    >
      <header className="flex justify-between items-center mb-6">
        <img
          src="/arrow-left.svg"
          alt=""
          className="cursor-pointer"
          onClick={clickOnPrevMonth}
        />
        <div>
          <span>{monthName()}&nbsp;</span>
          <span>{curentYear}</span>
        </div>
        <img
          src="/arrow-right.svg"
          alt=""
          className="cursor-pointer"
          onClick={clickOnNextMonth}
        />
      </header>

      <div>
        <div className="grid grid-cols-7 gap-4 text-sm text-gray-400">
          <span className="block text-center w-8 h-8">S</span>
          <span className="block text-center w-8 h-8">M</span>
          <span className="block text-center w-8 h-8">T</span>
          <span className="block text-center w-8 h-8">W</span>
          <span className="block text-center w-8 h-8">T</span>
          <span className="block text-center w-8 h-8">F</span>
          <span className="block text-center w-8 h-8">S</span>
        </div>
        <div className="grid grid-cols-7 gap-4 text-sm">
          {days.map((item) => (
            <span
              key={item}
              className={`flex items-center justify-center text-center  cursor-pointer w-8 h-8 rounded-full transition-all ${
                item === selectedDay
                  ? "bg-black text-white"
                  : "hover:bg-slate-100"
              }`}
              onClick={() => handleClickOnDay(item)}
            >
              {item}
            </span>
          ))}
        </div>
        {withActions && (
          <div className="mt-4">
            <button
              className="bg-black text-white py-2 px-4 rounded text-xs mr-2"
              onClick={() => onAccept && onAccept()}
            >
              Accept
            </button>
            <button
              className="text-gray-400 py-2 px-4 rounded text-xs"
              onClick={() => onCancel && onCancel()}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
