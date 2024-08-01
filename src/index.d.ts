import { Dayjs } from "dayjs";

interface CalendarProps {
  withActions?: boolean;
  onCancel?: () => void | undefined;
  onAccept?: () => void | undefined;
  onChange?: (date: Dayjs | Date) => void | undefined;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
