import { useMemo, useCallback } from "react";

import { useDate } from "../hooks/useDate";
import { useDateContext } from "../store/DateContext";

export const useDays = ({ showDefaultDay = true }) => {
  const { baseDate } = useDate();
  const { locale, calendarType, currentDate, setCurrentDate } =
    useDateContext();
  const { currentMonthFormHeader } = useDateContext();
  const { currentYearFormHeader } = useDateContext();

  const currentMonthDaysLength = currentDate
    .month(currentMonthFormHeader)
    .daysInMonth();

  const prevMonthDaysLength = currentDate
    .month(currentMonthFormHeader - 1)
    .daysInMonth();

  const startOfCurrentMonth = Number(
    currentDate.month(currentMonthFormHeader).startOf("month").weekday()
  );

  const endOfCurrentMonth = Number(
    currentDate.month(currentMonthFormHeader).endOf("month").weekday()
  );

  const nextMonthDaysLength = 6 - Number(endOfCurrentMonth);

  const prevMonthDays = Array.from(
    { length: startOfCurrentMonth },
    (_, index) => ({
      day: prevMonthDaysLength - (startOfCurrentMonth - 1) + index,
      isCurrentMonth: false,
    })
  );

  const currentMonthDays = Array.from(
    { length: currentMonthDaysLength },
    (_, index) => ({
      day: index + 1,
      isCurrentMonth: true,
    })
  );

  const nextMonthDays = Array.from(
    { length: nextMonthDaysLength },
    (_, index) => ({
      day: index + 1,
      isCurrentMonth: false,
    })
  );

  const allDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

  const checkIsHoliday = (dayNumber: number) => {
    const targetDateWeekdayname = dayNumber % 7;
    const holidayWeekdays = locale === "fa" ? [6] : [0, 6];
    return holidayWeekdays.includes(targetDateWeekdayname);
  };

  const days = useMemo(
    () =>
      allDays.map((item, index) => ({
        ...item,
        isHoliday: checkIsHoliday(index),
      })),
    [allDays]
  );

  const clickOnDay = useCallback((dayObject: any) => {
    const day = dayObject?.day;
    const isCurrentMonth = dayObject?.isCurrentMonth;

    if (!isCurrentMonth) return;

    setCurrentDate(
      currentDate
        .date(day)
        .month(currentMonthFormHeader)
        .year(currentYearFormHeader)
    );
  }, []);

  const dayClasses =
    "flex items-center justify-center text-center w-8 h-8 mx-auto rounded-full cursor-pointer transition-all";

  const activeClasses = (dayObject: any) => {
    const day = dayObject?.day;
    const isHoliday = dayObject?.isHoliday;
    const selectedDate = currentDate.date();
    const isCurrentMonth = dayObject?.isCurrentMonth;
    const selectedYear = Number(currentDate.format("YYYY"));
    const selectedMonth = Number(currentDate.format("MM")) - 1;
    const defaultDay = baseDate().calendar(calendarType).date();
    const defaultYear = baseDate().calendar(calendarType).year();
    const defaultMonth = baseDate().calendar(calendarType).month();

    if (
      isCurrentMonth &&
      day === selectedDate &&
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
      return "pointer-events-none text-gray-300";
    }

    if (isHoliday && isCurrentMonth) return "text-red-500";

    return "";
  };

  return {
    days,
    locale,
    dayClasses,
    clickOnDay,
    activeClasses,
  };
};
