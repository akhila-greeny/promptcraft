import { useState } from "react";
import PromptInput from "./components/PromptInput";
import Controls from "./components/Controls";
import ResponseBox from "./components/ResponseBox";
import { generateMockResponse } from "./data/mockResponses";
import SavedPrompts from "./components/SavedPrompts";
import HistoryPanel from "./components/HistoryPanel";


export default function App() {
  const [prompt, setPrompt] = useState("");

  const [settings, setSettings] = useState({
    temperature: 0.5,
    creativity: 50,
    formality: "Neutral",
    role: "Teacher",
  });

  const [response, setResponse] = useState("");

  const handleGenerate = () => {
  if (!prompt.trim()) return;

  const res = generateMockResponse(prompt, settings);
  setResponse(res);

  const newHistory = [{ prompt, settings }, ...history].slice(0, 10);
  setHistory(newHistory);
  localStorage.setItem("history", JSON.stringify(newHistory));
};


  const [savedPrompts, setSavedPrompts] = useState(
  JSON.parse(localStorage.getItem("savedPrompts")) || []
  );
  const handleSave = () => {
  const newSaved = [...savedPrompts, { prompt, settings }];
  setSavedPrompts(newSaved);
  localStorage.setItem("savedPrompts", JSON.stringify(newSaved));
};

const handleLoad = (item) => {
  setPrompt(item.prompt);
  setSettings(item.settings);
};

const handleDelete = (index) => {
  const updated = savedPrompts.filter((_, i) => i !== index);
  setSavedPrompts(updated);
  localStorage.setItem("savedPrompts", JSON.stringify(updated));
};
const [history, setHistory] = useState(
  JSON.parse(localStorage.getItem("history")) || []
);
const handleHistoryLoad = (item) => {
  setPrompt(item.prompt);
  setSettings(item.settings);
};
const handleHistoryDelete = (index) => {
  const updated = history.filter((_, i) => i !== index);
  setHistory(updated);
  localStorage.setItem("history", JSON.stringify(updated));
};

const handleHistoryClear = () => {
  setHistory([]);
  localStorage.removeItem("history");
};

  return (
  <div className="min-h-screen bg-gray-900 text-white p-6">
    <h1 className="text-3xl font-bold mb-6">
      PromptCraft – AI Prompt Playground
    </h1>

    <div className="grid grid-cols-2 gap-6">
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          onGenerate={handleGenerate}
          onSave={handleSave}
        />
      </div>

      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <Controls settings={settings} setSettings={setSettings} />
      </div>
    </div>

    <div className="bg-gray-800 p-4 rounded-xl shadow mt-6">
      <ResponseBox response={response} />
    </div>

    <div className="bg-gray-800 p-4 rounded-xl shadow mt-6">
      <div className="grid grid-cols-2 gap-6">
        <SavedPrompts
          saved={savedPrompts}
          onLoad={handleLoad}
          onDelete={handleDelete}
        />

        <HistoryPanel
  history={history}
  onLoad={handleHistoryLoad}
  onDelete={handleHistoryDelete}
  onClear={handleHistoryClear}
/>

      </div>
    </div>
  </div>
);
}