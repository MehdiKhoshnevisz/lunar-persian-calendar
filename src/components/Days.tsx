import { useEffect, useState } from "react";

import { useDate } from "../hooks/useDate";

export const Days = (props: any) => {
  const { currentDate } = props;

  const jalaliDate = useDate({});
  const [selectedDay, setSelectedDay] = useState(
    Number(jalaliDate().format("DD"))
  );
  const [daysInMonth, setDaysInMonth]: any = useState([null]);

  const handleClickOnDay = (day: number) => {
    setSelectedDay(day);
  };

  useEffect(() => {
    const daysLength = currentDate.daysInMonth();
    const daysArray = Array.from(
      { length: daysLength },
      (_, index) => index + 1
    );
    setDaysInMonth(daysArray);
  }, [currentDate]);

  return (
    <div style={{ direction: "rtl" }}>
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
    </div>
  );
};
