import { Dayjs } from "dayjs";
interface CalendarProps {
  withActions?: boolean;
  onCancel?: () => void | undefined;
  onAccept?: () => void | undefined;
  onChange?: (date: Dayjs | Date) => void | undefined;
}
