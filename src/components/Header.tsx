import { useEffect } from "react";
import { useDateContext } from "../store/DateContext";

export const Header = () => {
  const { currentDate, setCurrentDate } = useDateContext();
  const { currentMonthFormHeader, setCurrentMonthFromHeader } =
    useDateContext();
  const { currentYearFormHeader, setCurrentYearFromHeader } = useDateContext();
  const { showMonthList, setShowMonthList } = useDateContext();

  const months = Array.from({ length: 12 }, (_, index) =>
    currentDate.locale("fa").month(index).format("MMMM")
  );

  const monthName = () => {
    return months[currentMonthFormHeader];
  };

  const clickOnPrevMonth = () => {
    if (currentMonthFormHeader === 0) {
      setCurrentMonthFromHeader(11);
      setCurrentYearFromHeader(currentYearFormHeader - 1);
    } else {
      const prevMonth = currentMonthFormHeader - 1;
      setCurrentMonthFromHeader(prevMonth);
    }
  };

  const clickOnNextMonth = () => {
    if (currentMonthFormHeader === 11) {
      setCurrentMonthFromHeader(0);
      setCurrentYearFromHeader(currentYearFormHeader + 1);
    } else {
      setCurrentMonthFromHeader(currentMonthFormHeader + 1);
    }
  };

  const clickOnCurrentMonth = () => {
    setShowMonthList(!showMonthList);
  };

  useEffect(() => {
    setCurrentMonthFromHeader(currentDate.month());
  }, [currentDate.month()]);

  return (
    <header className="flex justify-between items-center mb-6">
      <img
        src="/arrow-left.svg"
        alt=""
        className="cursor-pointer  transition-all active:scale-90"
        onClick={clickOnPrevMonth}
      />
      <div>
        <span
          className="cursor-pointer hover:text-slate-500"
          onClick={clickOnCurrentMonth}
        >
          {monthName()}&nbsp;
        </span>
        <span>{currentYearFormHeader}</span>
      </div>
      <img
        src="/arrow-right.svg"
        alt=""
        className="cursor-pointer transition-all active:scale-90"
        onClick={clickOnNextMonth}
      />
    </header>
  );
};
