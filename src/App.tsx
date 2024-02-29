import dayjs from "dayjs";
import jalaliday from "jalaliday";

import { IApp } from "./index";
import { useEffect, useState } from "react";

export const App: React.FC<IApp> = (props: IApp) => {
  dayjs.extend(jalaliday);
  const jalaliDate = (date?: any) => dayjs(date).calendar("jalali");

  const { onChange, onAccept, onCancel, withActions = false } = props;
  const [selectedDay, setSelectedDay] = useState(
    Number(jalaliDate().format("DD"))
  );
  const [daysInMonth, setDaysInMonth]: any = useState([null]);
  const [currentDate, setCurrentDate] = useState(jalaliDate());

  useEffect(() => {
    const daysLength = currentDate.daysInMonth();

    const daysArray = Array.from(
      { length: daysLength },
      (_, index) => index + 1
    );

    setDaysInMonth(daysArray);
  }, [currentDate]);

  const monthName = () => {
    return currentDate.locale("fa").format("MMMM");
  };

  const currentYear = () => {
    return currentDate.locale("fa").year();
  };

  const clickOnPrevMonth = () => {
    if (currentDate.month() === 0) {
      // Fix: need to fix first time prev button
      const prevYear = currentDate.month(11).subtract(1, "year");
      setCurrentDate(prevYear);
    } else {
      const prevMonth = currentDate.subtract(1, "month");
      console.log({ prevMonth: prevMonth.year() });
      setCurrentDate(prevMonth);
    }
  };

  const clickOnNextMonth = () => {
    if (currentDate.month() === 11) {
      const nextYear = currentDate.month(0).add(1, "year");
      setCurrentDate(nextYear);
    } else {
      const nextMonth = currentDate.add(1, "month");
      setCurrentDate(nextMonth);
    }
  };

  const handleClickOnDay = (day: number) => {
    if (onChange) {
      onChange(day);
    }
    setSelectedDay(day);
  };

  return (
    <div
      className="bg-white rounded-lg p-8"
      style={{
        minHeight: "368px",
        boxShadow: "0px 8px 24px 0px rgba(84, 89, 115, 0.06)",
      }}
    >
      <header className="flex justify-between items-center mb-6">
        <img
          src="/arrow-left.svg"
          alt=""
          className="cursor-pointer  transition-all active:scale-90"
          onClick={clickOnPrevMonth}
        />
        <div>
          <span>{monthName()}&nbsp;</span>
          <span>{currentYear()}</span>
        </div>
        <img
          src="/arrow-right.svg"
          alt=""
          className="cursor-pointer transition-all active:scale-90"
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
          {daysInMonth.map((item: any) => (
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
