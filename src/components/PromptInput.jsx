export default function PromptInput({ prompt, setPrompt, onGenerate, onSave })
 {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Enter Prompt</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
        className="w-full h-32 p-3 rounded-lg bg-gray-700 text-white outline-none"
      />

      <div className="flex gap-3 mt-3">
  <button
    onClick={onGenerate}
    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
  >
    Generate Response
  </button>

  <button
    onClick={onSave}
    className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
  >
    Save Prompt
  </button>
</div>

    </div>
  );
}
