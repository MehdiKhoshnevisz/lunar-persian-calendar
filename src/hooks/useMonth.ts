import { useDateContext } from "../store/DateContext";

export const useMonth = () => {
  const {
    currentDate,
    currentYearFormHeader,
    currentMonthFormHeader,
    setCurrentYearFromHeader,
    setCurrentMonthFromHeader,
  } = useDateContext();

  const months = Array.from({ length: 12 }, (_, index) => {
    return currentDate.month(index).format("MMMM");
  });

  const currentMonthName = currentDate
    .month(currentMonthFormHeader)
    .format("MMMM");

  const goToPrevMonth = () => {
    if (currentMonthFormHeader === 0) {
      setCurrentMonthFromHeader(11);
      setCurrentYearFromHeader(currentYearFormHeader - 1);
    } else {
      const prevMonth = currentMonthFormHeader - 1;
      setCurrentMonthFromHeader(prevMonth);
    }
  };

  const goToNextMonth = () => {
    if (currentMonthFormHeader === 11) {
      setCurrentMonthFromHeader(0);
      setCurrentYearFromHeader(currentYearFormHeader + 1);
    } else {
      setCurrentMonthFromHeader(currentMonthFormHeader + 1);
    }
  };

  return { months, currentMonthName, goToPrevMonth, goToNextMonth };
};
