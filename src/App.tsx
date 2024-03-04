import { useEffect } from "react";

import { IApp } from "./index";
import { useDate } from "./hooks/useDate";
import { Days } from "./components/Days";
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

  useEffect(() => {
    onChange(currentDate.toDate());
  }, [currentDate]);

  return (
    <div
      className="bg-white rounded-lg p-8"
      style={{
        minHeight: "368px",
        boxShadow: "0px 8px 24px 0px rgba(84, 89, 115, 0.06)",
      }}
    >
      <Header />
      <DaysHeader />
      <Days />
      {withActions && <Actions />}
    </div>
  );
};
