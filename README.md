# PromptCraft – AI Prompt Playground

Built an interactive frontend application that simulates how AI responses change based on prompt parameters such as temperature, creativity, formality, and role.

## Tech Stack

  - React
  - Tailwind CSS
  - Local Storage
  - Java Script
  - Vite
 
## Key Features

  - Designed a dynamic prompt interface with adjustable AI parameters (temperature, creativity, tone, role)
  - Implemented simulated AI response generation logic based on user-controlled settings
  - Developed save and history tracking using LocalStorage with reload, delete, and clear functionality
  - Built reusable React components with clean state management and dashboard-style UI
  - Styled the application using Tailwind CSS for a modern, responsive layout

## What This Demonstrates

  -  Strong React component architecture and state handling
  -  Product thinking and UI/UX design
  -  Frontend simulation of AI behavior without backend APIs

## Working

  1. User enters a prompt in the input box.

  2. User adjusts controls:
       - Temperature (precision ↔ creativity)
       - Creativity level
       - Formality (Casual / Neutral / Formal)
       - Role (Teacher / Developer / Poet / Friend)

  3. When Generate Response is clicked:
       - A mock AI engine (mockResponses.js) generates a response
       - The response style changes based on selected parameters

  4. Users can:
       - Save prompts (stored in LocalStorage)
       - View and reload previous prompts from History
       - Delete individual history items or clear all

  5. All data persists using the browser’s LocalStorage — no backend required.

## How To Run

git clone https://github.com/YOUR_USERNAME/promptcraft.git
cd promptcraft
npm install
npm run dev


