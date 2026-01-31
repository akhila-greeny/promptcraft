export default function SavedPrompts({ saved, onLoad, onDelete }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Saved Prompts</h2>

      {saved.length === 0 && (
        <p className="text-gray-400">No saved prompts yet.</p>
      )}

      {saved.map((item, index) => (
        <div
          key={index}
          className="bg-gray-700 p-3 rounded-lg mb-2 flex justify-between items-center"
        >
          <span className="truncate w-2/3">{item.prompt}</span>

          <div className="flex gap-2">
            <button
              onClick={() => onLoad(item)}
              className="bg-green-600 px-2 py-1 rounded"
            >
              Load
            </button>

            <button
              onClick={() => onDelete(index)}
              className="bg-red-600 px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
