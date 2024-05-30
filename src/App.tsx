import { useEffect } from "react";

import { IApp } from "./index";
import { Days } from "./components/Days";
import { Years } from "./components/Years";
import { Months } from "./components/Months";
import { Header } from "./components/Header";
import { Actions } from "./components/Actions";
import { Weekdays } from "./components/Weekdays";
import { useDateContext } from "./store/DateContext";

export const App: React.FC<IApp> = (props: IApp) => {
  const {
    onChange = () => {},
    onAccept,
    onCancel,
    withActions = false,
  } = props;

  const { currentDate, setCurrentDate } = useDateContext();
  const { showYearList, setShowYearList } = useDateContext();
  const { showMonthList, setShowMonthList } = useDateContext();

  const MonthsOrYearsOrDaysComponent = () => {
    if (showMonthList) return <Months />;
    else if (showYearList) return <Years />;
    return (
      <>
        <Weekdays />
        <Days />
      </>
    );
  };

  useEffect(() => {
    onChange(currentDate.toDate());
  }, [currentDate]);

  return (
    <div
      className="bg-white rounded-lg p-8"
      style={{
        minWidth: "384px",
        minHeight: "368px",
        maxHeight: "410px",
        boxShadow: "0px 8px 24px 0px rgba(84, 89, 115, 0.06)",
      }}
    >
      <Header />
      <MonthsOrYearsOrDaysComponent />
      {withActions && <Actions />}
    </div>
  );
};
