import { useYears } from "../hooks/useYears";
import { useMonth } from "../hooks/useMonth";
import { useDateContext } from "../store/DateContext";

export const Header = () => {
  const { currentYear } = useYears();
  const { currentMonthName, goToNextMonth, goToPrevMonth } = useMonth();
  const { showYearList, showMonthList, setShowYearList, setShowMonthList } =
    useDateContext();

  const clickOnMonth = () => {
    setShowMonthList(!showMonthList);
    setShowYearList(false);
  };

  const clickOnYear = () => {
    setShowYearList(!showYearList);
    setShowMonthList(false);
  };

  return (
    <header className="flex justify-between items-center mb-6">
      <img
        src="/arrow-left.svg"
        alt=""
        className="cursor-pointer  transition-all active:scale-90"
        onClick={goToPrevMonth}
      />

      <div>
        <span className="cursor-pointer" onClick={clickOnMonth}>
          {currentMonthName}
        </span>
        &nbsp;
        <span className="cursor-pointer" onClick={clickOnYear}>
          {currentYear}
        </span>
      </div>

      <img
        src="/arrow-right.svg"
        alt=""
        className="cursor-pointer transition-all active:scale-90"
        onClick={goToNextMonth}
      />
    </header>
  );
};
