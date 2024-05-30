import { Dayjs } from "dayjs";
import { useDate } from "../hooks/useDate";
import { createContext, useState, useContext } from "react";

interface DateContextType {
  locale: string;
  currentDate: Dayjs;
  showYearList: boolean;
  showMonthList: boolean;
  currentYearFormHeader: number;
  currentMonthFormHeader: number;
  calendarType: "jalali" | "gregory";

  setLocale: (value: string) => void;
  setCurrentDate: (date: Dayjs) => void;
  setShowYearList: (value: boolean) => void;
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
  const { baseDate } = useDate();
  const [locale, setLocale] = useState<string>("fa");
  const calendarType = locale === "fa" ? "jalali" : "gregory";
  const [showYearList, setShowYearList] = useState(false);
  const [showMonthList, setShowMonthList] = useState(false);
  const date = baseDate().calendar(calendarType).locale(locale);

  const [currentYearFormHeader, setCurrentYearFromHeader] = useState<number>(
    date.year()
  );
  const [currentMonthFormHeader, setCurrentMonthFromHeader] = useState<number>(
    date.month()
  );
  const [currentDate, setCurrentDate] = useState<Dayjs>(date);

  return (
    <DateContext.Provider
      value={{
        locale,
        setLocale,
        currentDate,
        calendarType,
        showYearList,
        showMonthList,
        setCurrentDate,
        setShowYearList,
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
