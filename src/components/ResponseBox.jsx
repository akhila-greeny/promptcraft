export default function ResponseBox({ response }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">AI Response</h2>
      <div className="bg-gray-700 p-4 rounded-lg min-h-[120px] whitespace-pre-line">
        {response || "Your AI response will appear here..."}
      </div>
      <button
  onClick={() => navigator.clipboard.writeText(response)}
  className="mt-3 bg-blue-600 px-3 py-1 rounded"
>
  Copy Response
</button>
    </div>
  );
}
