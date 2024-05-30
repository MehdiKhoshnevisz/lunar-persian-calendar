import { useDateContext } from "src/store/DateContext";

export const Actions = (props: any) => {
  const { onAccept, onCancel } = props;
  const { locale } = useDateContext();

  return (
    <div
      className="mt-4"
      style={{ direction: locale === "fa" ? "rtl" : "ltr" }}
    >
      <button
        className="bg-black text-white py-2 px-4 rounded text-xs mr-2"
        onClick={() => onAccept && onAccept()}
      >
        {locale === "fa" ? "تایید" : "Accept"}
      </button>
      <button
        className="text-gray-400 py-2 px-4 rounded text-xs"
        onClick={() => onCancel && onCancel()}
      >
        {locale === "fa" ? "انصراف" : "Cancel"}
      </button>
    </div>
  );
};
