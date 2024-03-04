export interface IApp {
  withActions?: boolean;
  onCancel?: () => viod | undefined;
  onAccept?: () => viod | undefined;
  onChange?: (date: Dayjs) => viod | undefined;
}
