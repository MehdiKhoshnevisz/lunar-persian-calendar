import { useEffect, useMemo, useState } from "react";

import { useDate } from "../hooks/useDate";
import { useDateContext } from "src/store/DateContext";

import { WEEKDAY_NAMES } from "./DaysHeader";

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

  const handleClickOnDay = (dayObject: any) => {
    const day = dayObject?.day;
    const isCurrentMonth = dayObject?.isCurrentMonth;

    if (!isCurrentMonth) return;

    setSelectedDay(day);
    setCurrentDate(
      jalaliDate(currentDate)
        .day(day)
        .month(currentMonthFormHeader)
        .year(currentYearFormHeader)
    );
  };

  const dayClasses =
    "flex items-center justify-center text-center w-8 h-8 rounded-full transition-all";

  const activeClasses = (dayObject: any) => {
    const day = dayObject?.day;
    const isCurrentMonth = dayObject?.isCurrentMonth;

    if (
      isCurrentMonth &&
      day === selectedDay &&
      currentMonthFormHeader === selectedMonth &&
      currentYearFormHeader === selectedYear
    )
      return "bg-black text-white";
    if (
      isCurrentMonth &&
      showDefaultDay &&
      day === defaultDay &&
      defaultMonth === currentMonthFormHeader &&
      defaultYear === currentYearFormHeader
    )
      return "bg-slate-100 text-primary";

    if (!isCurrentMonth) {
      return "text-gray-300";
    }
    // TODO: active holiday days
    // if (day === 29) return "bg-red-500 text-white";
    return "cursor-pointer hover:bg-slate-100";
  };

  const getUpdatedCurrentDate = (date: any) => {
    const targetDate = date
      .day(defaultDay)
      .month(currentMonthFormHeader)
      .year(currentYearFormHeader);
    return targetDate;
  };

  function getFirstWeekdayOfMonth(date: any) {
    const targetDate = getUpdatedCurrentDate(date);

    const targetDateWeekdayname = targetDate
      .locale("fa")
      .startOf("month")
      .format("dd");

    const targetWeekday = WEEKDAY_NAMES.find(
      (item) => item.name === targetDateWeekdayname
    );

    return targetWeekday;
  }

  function getLastWeekdayOfMonth(date: any) {
    const targetDate = getUpdatedCurrentDate(date);

    const targetDateWeekdayname = targetDate
      .locale("fa")
      .endOf("month")
      .format("dd");

    const targetWeekday = WEEKDAY_NAMES.find(
      (item) => item.name === targetDateWeekdayname
    );

    return targetWeekday;
  }

  useEffect(() => {
    const firstWeekdayOfMonth = Number(
      getFirstWeekdayOfMonth(currentDate)?.key
    );

    const startOfCurrentMonth = Number(
      currentDate.month(currentMonthFormHeader).startOf("month").format("d")
    );

    const prevMonthDaysLength = currentDate
      .month(currentMonthFormHeader - 1)
      .daysInMonth();

    const nextMonthDaysLength =
      6 - Number(getLastWeekdayOfMonth(currentDate)?.key);

    const currentMonthDaysLength = jalaliDate()
      .month(currentMonthFormHeader)
      .daysInMonth();

    const prevMonthDays = Array.from(
      { length: firstWeekdayOfMonth },
      (_, index) => ({
        day: prevMonthDaysLength - startOfCurrentMonth + index,
        isCurrentMonth: false,
      })
    );

    const currentMonthDays = Array.from(
      { length: currentMonthDaysLength },
      (_, index) => ({ day: index + 1, isCurrentMonth: true })
    );

    const nextMonthDays = Array.from(
      { length: nextMonthDaysLength },
      (_, index) => ({ day: index + 1, isCurrentMonth: false })
    );

    const days = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

    setDaysInMonth(days);
  }, [currentMonthFormHeader]);

  return (
    <div style={{ direction: "rtl" }}>
      <div className="grid grid-cols-7 gap-4 text-sm">
        {daysInMonth.map((item: any, index: number) => (
          <span
            key={index}
            className={`${dayClasses} ${activeClasses(item)}`}
            onClick={() => handleClickOnDay(item)}
          >
            {item?.day}
          </span>
        ))}
      </div>
    </div>
  );
};
