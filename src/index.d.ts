export interface IApp {
  withActions?: boolean;
  onCancel?: () => viod | undefined;
  onAccept?: () => viod | undefined;
  onChange?: (props: number) => viod | undefined;
}
