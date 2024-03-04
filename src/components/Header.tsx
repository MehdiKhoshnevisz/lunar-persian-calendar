import { useDate } from "../hooks/useDate";
import { useDateContext } from "../store/DateContext";

export const Header = () => {
  const jalaliDate = useDate();

  const { currentDate, setCurrentDate } = useDateContext();
  const { currentMonthFormHeader, setCurrentMonthFromHeader } =
    useDateContext();

  const months = Array.from({ length: 12 }, (_, index) =>
    jalaliDate().locale("fa").month(index).format("MMMM")
  );

  const monthName = () => {
    return months[currentMonthFormHeader];
  };

  const currentYear = () => {
    return currentDate.locale("fa").year();
  };

  const clickOnPrevMonth = () => {
    if (currentMonthFormHeader === 0) {
      setCurrentMonthFromHeader(11);
      setCurrentDate(currentDate.subtract(1, "year"));
    } else {
      const prevMonth = currentMonthFormHeader - 1;
      setCurrentMonthFromHeader(prevMonth);
    }
  };

  const clickOnNextMonth = () => {
    if (currentMonthFormHeader === 11) {
      setCurrentMonthFromHeader(0);
      setCurrentDate(currentDate.add(1, "year"));
    } else {
      setCurrentMonthFromHeader(currentMonthFormHeader + 1);
    }
  };

  return (
    <header className="flex justify-between items-center mb-6">
      <img
        src="/arrow-left.svg"
        alt=""
        className="cursor-pointer  transition-all active:scale-90"
        onClick={clickOnPrevMonth}
      />
      <div>
        <span className="cursor-pointer hover:text-slate-500">
          {monthName()}&nbsp;
        </span>
        <span>{currentYear()}</span>
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
