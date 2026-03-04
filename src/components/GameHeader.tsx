import React from "react";
import { Briefcase, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GameHeaderProps {
  inventory: string[];
}

const GameHeader: React.FC<GameHeaderProps> = ({ inventory }) => {
  return (
    <header className="flex items-center justify-between p-6 bg-black/40 backdrop-blur-md border-b border-cyan-500/30 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Zap className="text-cyan-400 animate-pulse" size={24} />
        <h1 className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          NEON LABYRINTH
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <Briefcase size={16} className="text-purple-400" />
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Inventory</span>
        </div>
        <div className="flex gap-1">
          {inventory.length === 0 ? (
            <span className="text-xs text-gray-600 italic">Empty</span>
          ) : (
            inventory.map((item, i) => (
              <Badge key={i} variant="outline" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/50 animate-in fade-in zoom-in duration-300">
                {item}
              </Badge>
            ))
          )}
        </div>
      </div>
    </header>
  );
};

export default GameHeader;