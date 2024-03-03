import dayjs from "dayjs";
import jalaliday from "jalaliday";

interface Props {
  date?: Date;
}

export const useDate = (props: Props) => {
  const { date } = props;
  dayjs.extend(jalaliday);
  return () => dayjs(date).calendar("jalali");
};
