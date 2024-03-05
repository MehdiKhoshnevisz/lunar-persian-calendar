import { useEffect, useMemo, useState } from "react";

import { useDate } from "../hooks/useDate";
import { useDateContext } from "src/store/DateContext";

export const Days = (props: any) => {
  const { showDefaultDay = true } = props;
  const jalaliDate = useDate();
  const { currentDate, setCurrentDate } = useDateContext();
  const { currentMonthFormHeader, setCurrentMonthFromHeader } =
    useDateContext();
  const { currentYearFormHeader, setCurrentYearFromHeader } = useDateContext();
  const [daysInMonth, setDaysInMonth]: any = useState([null]);
  const [selectedDay, setSelectedDay]: any = useState(
    Number(jalaliDate(currentDate).format("DD"))
  );
  const defaultDay = useMemo(() => Number(jalaliDate().format("DD")), []);
  const defaultMonth = useMemo(() => Number(jalaliDate().format("MM")) - 1, []);
  const defaultYear = useMemo(() => Number(jalaliDate().format("YYYY")), []);
  const selectedMonth = Number(jalaliDate(currentDate).format("MM")) - 1;
  const selectedYear = Number(currentDate.format("YYYY"));

  const handleClickOnDay = (day: number) => {
    setSelectedDay(day);
    setCurrentDate(
      jalaliDate(currentDate)
        .day(day)
        .month(currentMonthFormHeader)
        .year(currentYearFormHeader)
    );
  };

  const dayClasses =
    "flex items-center justify-center text-center  cursor-pointer w-8 h-8 rounded-full transition-all";

  const activeClasses = (day: any) => {
    if (
      day === selectedDay &&
      currentMonthFormHeader === selectedMonth &&
      currentYearFormHeader === selectedYear
    )
      return "bg-black text-white";
    if (
      showDefaultDay &&
      day === defaultDay &&
      defaultMonth === currentMonthFormHeader &&
      defaultYear === currentYearFormHeader
    )
      return "bg-slate-100 text-primary";
    // TODO: active holiday days
    // if (day === 29) return "bg-red-500 text-white";
    return "hover:bg-slate-100";
  };

  useEffect(() => {
    const daysLength = jalaliDate().month(currentMonthFormHeader).daysInMonth();
    const daysArray = Array.from(
      { length: daysLength },
      (_, index) => index + 1
    );
    setDaysInMonth(daysArray);
  }, [currentMonthFormHeader]);

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
