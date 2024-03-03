import { useState } from "react";

import { IApp } from "./index";
import { useDate } from "./hooks/useDate";
import { Days } from "./components/Days";
import { Header } from "./components/Header";
import { Actions } from "./components/Actions";
import { DaysHeader } from "./components/DaysHeader";

export const App: React.FC<IApp> = (props: IApp) => {
  const { onChange, onAccept, onCancel, withActions = false } = props;

  const jalaliDate = useDate();
  const [currentDate, setCurrentDate] = useState(jalaliDate());

  return (
    <div
      className="bg-white rounded-lg p-8"
      style={{
        minHeight: "368px",
        boxShadow: "0px 8px 24px 0px rgba(84, 89, 115, 0.06)",
      }}
    >
      <Header
        currentDate={currentDate}
        onNext={(date: any) => setCurrentDate(date)}
        onPrev={(date: any) => setCurrentDate(date)}
      />
      <DaysHeader />
      <Days
        currentDate={currentDate}
        onChange={(date: any) => setCurrentDate(date)}
      />
      {withActions && <Actions />}
    </div>
  );
};
