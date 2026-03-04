import React, { useState, useEffect } from "react";
import { storyData } from "../data/storyData";
import { GameState, Choice } from "../types/story";
import GameHeader from "../components/GameHeader";
import SceneDisplay from "../components/SceneDisplay";
import ChoiceList from "../components/ChoiceList";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { showSuccess } from "../utils/toast";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentSceneId: "start",
    inventory: [],
    history: ["start"]
  });

  const currentScene = storyData[gameState.currentSceneId];

  const handleChoice = (choice: Choice) => {
    const nextScene = storyData[choice.nextSceneId];
    
    if (!nextScene) {
      console.error("Scene not found:", choice.nextSceneId);
      return;
    }

    const newInventory = [...gameState.inventory];
    if (choice.grantItem && !newInventory.includes(choice.grantItem)) {
      newInventory.push(choice.grantItem);
      showSuccess(`Acquired: ${choice.grantItem}`);
    }

    // If it's a restart (end scene), clear inventory
    if (currentScene.isEnd) {
      setGameState({
        currentSceneId: choice.nextSceneId,
        inventory: [],
        history: [choice.nextSceneId]
      });
    } else {
      setGameState(prev => ({
        currentSceneId: choice.nextSceneId,
        inventory: newInventory,
        history: [...prev.history, choice.nextSceneId]
      }));
    }
  };

  // Scroll to top on scene change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [gameState.currentSceneId]);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-100 font-sans selection:bg-cyan-500/30">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <GameHeader inventory={gameState.inventory} />

      <main className="container max-w-3xl mx-auto px-6 py-12 relative z-10">
        <SceneDisplay scene={currentScene} />
        
        <ChoiceList 
          choices={currentScene.choices} 
          inventory={gameState.inventory}
          onChoice={handleChoice}
        />

        {currentScene.isEnd && (
          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-2">End of Chapter</p>
            <h3 className="text-xl font-bold text-cyan-400">Thanks for playing!</h3>
          </div>
        )}
      </main>

      <footer className="mt-auto py-8 border-t border-white/5">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;