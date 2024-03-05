import { useEffect } from "react";

import { IApp } from "./index";
import { Days } from "./components/Days";
import { Months } from "./components/Months";
import { Header } from "./components/Header";
import { Actions } from "./components/Actions";
import { DaysHeader } from "./components/DaysHeader";
import { useDateContext } from "./store/DateContext";

export const App: React.FC<IApp> = (props: IApp) => {
  const {
    onChange = () => {},
    onAccept,
    onCancel,
    withActions = false,
  } = props;

  const { currentDate, setCurrentDate } = useDateContext();
  const { showMonthList, setShowMonthList } = useDateContext();

  useEffect(() => {
    onChange(currentDate.toDate());
  }, [currentDate]);

  return (
    <div
      className="bg-white rounded-lg p-8"
      style={{
        minWidth: "384px",
        height: "368px",
        boxShadow: "0px 8px 24px 0px rgba(84, 89, 115, 0.06)",
      }}
    >
      <Header />

      {showMonthList ? (
        <Months />
      ) : (
        <>
          <DaysHeader />
          <Days />
        </>
      )}
      {withActions && <Actions />}
    </div>
  );
};
