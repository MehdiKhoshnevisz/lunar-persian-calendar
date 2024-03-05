import { useDate } from "../hooks/useDate";
import dayjs, { Dayjs } from "dayjs";
import { createContext, useState, useContext } from "react";

interface DateContextType {
  currentDate: Dayjs;
  showMonthList: boolean;
  currentYearFormHeader: number;
  currentMonthFormHeader: number;
  setCurrentDate: (date: Dayjs) => void;
  setShowMonthList: (value: boolean) => void;
  setCurrentYearFromHeader: (month: number) => void;
  setCurrentMonthFromHeader: (month: number) => void;
}

interface DateProviderProps {
  children: React.ReactNode;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateProvider");
  }
  return context;
};

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const jalaliDate = useDate();
  const [currentDate, setCurrentDate] = useState<Dayjs>(jalaliDate());
  const [currentMonthFormHeader, setCurrentMonthFromHeader] = useState<number>(
    jalaliDate().month()
  );
  const [currentYearFormHeader, setCurrentYearFromHeader] = useState<number>(
    jalaliDate().year()
  );
  const [showMonthList, setShowMonthList] = useState(false);

  return (
    <DateContext.Provider
      value={{
        currentDate,
        showMonthList,
        setCurrentDate,
        setShowMonthList,
        currentYearFormHeader,
        currentMonthFormHeader,
        setCurrentYearFromHeader,
        setCurrentMonthFromHeader,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
