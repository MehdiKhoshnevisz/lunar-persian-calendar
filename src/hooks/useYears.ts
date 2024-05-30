import { useDateContext } from "../store/DateContext";

export const useYears = () => {
  const {
    locale,
    currentDate,
    currentYearFormHeader,
    setCurrentYearFromHeader,
  } = useDateContext();

  const startYear = locale === "fa" ? 1320 : 1920;

  const years = Array.from({ length: 200 }, (_, index) =>
    currentDate.year(startYear + index).format("YYYY")
  );

  const currentYear = currentDate.year(currentYearFormHeader).format("YYYY");

  const setYear = (year: number) => {
    setCurrentYearFromHeader(year);
  };

  return { years, setYear, currentYear };
};
