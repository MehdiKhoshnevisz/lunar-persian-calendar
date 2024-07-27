import { useEffect } from "react";

import { Days } from "./Days";
import { Years } from "./Years";
import { Months } from "./Months";
import { Header } from "./Header";
import { Actions } from "./Actions";
import { Weekdays } from "./Weekdays";

import { CalendarProps } from "../index.d";
import { useDateContext } from "../store/DateContext";

const Calendar: React.FC<CalendarProps> = (props) => {
  const {
    onChange = () => {},
    onAccept,
    onCancel,
    withActions = false,
  } = props;

  const { currentDate, showYearList, showMonthList } = useDateContext();

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
        maxWidth: "384px",
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

export default Calendar;
