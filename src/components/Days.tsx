import { useEffect, useMemo, useState } from "react";

import { useDate } from "../hooks/useDate";

export const Days = (props: any) => {
  const { onChange, currentDate, showDefaultDay = true } = props;

  const jalaliDate = useDate();
  const [selectedDay, setSelectedDay] = useState(
    Number(jalaliDate().format("DD"))
  );
  const [daysInMonth, setDaysInMonth]: any = useState([null]);

  const defaultDay = useMemo(
    () => Number(jalaliDate(currentDate).format("DD")),
    []
  );

  const handleClickOnDay = (day: number) => {
    onChange(jalaliDate(currentDate).day(day));
    setSelectedDay(day);
  };

  const dayClasses =
    "flex items-center justify-center text-center  cursor-pointer w-8 h-8 rounded-full transition-all";

  const activeClasses = (day: any) => {
    if (day === selectedDay) return "bg-black text-white";
    if (showDefaultDay && day === defaultDay)
      return "bg-slate-100 text-primary";
    // TODO: active holiday days
    // if (day === 29) return "bg-red-500 text-white";
    return "hover:bg-slate-100";
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
            className={`${dayClasses} ${activeClasses(item)}`}
            onClick={() => handleClickOnDay(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
