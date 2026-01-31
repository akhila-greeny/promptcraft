export default function Controls({ settings, setSettings }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Controls</h2>

      {/* Temperature */}
      <label className="block mb-2">Temperature: {settings.temperature}</label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={settings.temperature}
        onChange={(e) =>
          setSettings({ ...settings, temperature: e.target.value })
        }
        className="w-full mb-4"
      />

      {/* Creativity */}
      <label className="block mb-2">Creativity: {settings.creativity}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={settings.creativity}
        onChange={(e) =>
          setSettings({ ...settings, creativity: e.target.value })
        }
        className="w-full mb-4"
      />

      {/* Formality */}
      <label className="block mb-2">Formality</label>
      <select
        value={settings.formality}
        onChange={(e) =>
          setSettings({ ...settings, formality: e.target.value })
        }
        className="w-full p-2 rounded bg-gray-700 mb-4"
      >
        <option>Casual</option>
        <option>Neutral</option>
        <option>Formal</option>
      </select>

      {/* Role */}
      <label className="block mb-2">Role</label>
      <select
        value={settings.role}
        onChange={(e) => setSettings({ ...settings, role: e.target.value })}
        className="w-full p-2 rounded bg-gray-700"
      >
        <option>Teacher</option>
        <option>Developer</option>
        <option>Poet</option>
        <option>Friend</option>
      </select>
    </div>
  );
}
