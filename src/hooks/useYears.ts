import { useDateContext } from "../store/DateContext";

export const useYears = () => {
  const {
    locale,
    currentDate,
    currentYearFormHeader,
    setCurrentYearFromHeader,
  } = useDateContext();

  const startYear = locale === "fa" ? 1320 : 1920;

  const convertToLocaleString = (value: number) => {
    const regexFA = /٬/g;
    const regexEN = /,/g;

    const formattedValue = value
      .toLocaleString(locale)
      .replace(locale === "fa" ? regexFA : regexEN, "");

    return formattedValue;
  };

  const years = Array.from({ length: 200 }, (_, index) => ({
    key: Number(currentDate.year(startYear + index).format("YYYY")),
    year: convertToLocaleString(
      Number(currentDate.year(startYear + index).format("YYYY"))
    ),
  }));

  const currentYear = convertToLocaleString(
    Number(currentDate.year(currentYearFormHeader).format("YYYY"))
  );

  const setYear = (year: number) => {
    setCurrentYearFromHeader(year);
  };

  return { years, setYear, currentYear };
};
