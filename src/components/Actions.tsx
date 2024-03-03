export const Actions = (props: any) => {
  const { onAccept, onCancel } = props;

  return (
    <div className="mt-4">
      <button
        className="bg-black text-white py-2 px-4 rounded text-xs mr-2"
        onClick={() => onAccept && onAccept()}
      >
        Accept
      </button>
      <button
        className="text-gray-400 py-2 px-4 rounded text-xs"
        onClick={() => onCancel && onCancel()}
      >
        Cancel
      </button>
    </div>
  );
};
