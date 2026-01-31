function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateMockResponse(prompt, settings) {
  const { temperature, creativity, formality, role } = settings;

  const intros = {
    Teacher: [
      "Let's break this down step by step.",
      "This is a great question to explore.",
      "Here’s a clear explanation you can follow.",
    ],
    Developer: [
      "From a technical perspective,",
      "Let’s approach this logically.",
      "Here’s how this works under the hood.",
    ],
    Poet: [
      "Imagine this like a story unfolding,",
      "In soft words and flowing thoughts,",
      "Let the idea drift gently like a poem,",
    ],
    Friend: [
      "Alright, here’s the deal.",
      "Let me explain this in a simple way.",
      "Okay, think of it like this.",
    ],
  };

  const formalPhrases = [
    "I will provide a well-structured and thoughtful response.",
    "Allow me to present this in a clear and refined manner.",
  ];

  const casualPhrases = [
    "I’ll keep this simple and easy to understand.",
    "No fancy words — just the idea.",
  ];

  const neutralPhrases = [
    "Here’s a balanced explanation.",
    "Let’s understand this properly.",
  ];

  const creativeAddons = [
    "You can think of it as pieces of a puzzle coming together.",
    "It’s like connecting dots to see the bigger picture.",
    "This opens the door to many interesting possibilities.",
  ];

  const preciseAddons = [
    "This focuses only on the essential details.",
    "No extra fluff — just what matters.",
  ];

  let response = "";

  // Role intro
  response += pick(intros[role]) + " ";

  // Formality tone
  if (formality === "Formal") response += pick(formalPhrases) + "\n\n";
  else if (formality === "Casual") response += pick(casualPhrases) + "\n\n";
  else response += pick(neutralPhrases) + "\n\n";

  // Core response about the prompt
  response += `Regarding your prompt: "${prompt}"\n\n`;

  // Temperature & creativity effect
  if (temperature > 0.7 || creativity > 70) {
    response += pick(creativeAddons) + "\n";
  } else if (temperature < 0.3) {
    response += pick(preciseAddons) + "\n";
  }

  // Closing line
  response += "\nThis is how an AI might shape its response based on the given parameters.";

  return response;
}
