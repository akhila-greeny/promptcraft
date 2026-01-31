export default function HistoryPanel({ history, onLoad, onDelete, onClear }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">History</h2>

        {history.length > 0 && (
          <button
            onClick={onClear}
            className="bg-red-700 px-3 py-1 rounded text-sm"
          >
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 && (
        <p className="text-gray-400">No history yet.</p>
      )}

      {history.map((item, index) => (
        <div
          key={index}
          className="bg-gray-700 p-3 rounded-lg mb-2 flex justify-between items-center"
        >
          <p
            onClick={() => onLoad(item)}
            className="truncate w-2/3 cursor-pointer"
          >
            {item.prompt}
          </p>

          <button
            onClick={() => onDelete(index)}
            className="bg-red-600 px-2 py-1 rounded text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
