import { useYears } from "../hooks/useYears";
import { useMonth } from "../hooks/useMonth";
import { useDateContext } from "../store/DateContext";

//@ts-ignore
import arrowLeft from "../../public/arrow-left.svg";
//@ts-ignore
import arrowRight from "../../public/arrow-right.svg";

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
    <header
      className="flex justify-between items-center mb-6"
      style={{ direction: "rtl" }}
    >
      <img
        src={arrowRight}
        alt=""
        className="cursor-pointer transition-all active:scale-90"
        onClick={goToNextMonth}
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
        src={arrowLeft}
        alt=""
        className="cursor-pointer transition-all active:scale-90"
        onClick={goToPrevMonth}
      />
    </header>
  );
};
