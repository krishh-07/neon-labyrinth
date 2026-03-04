import React from "react";
import { motion } from "framer-motion";
import { Choice } from "../types/story";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock } from "lucide-react";

interface ChoiceListProps {
  choices: Choice[];
  inventory: string[];
  onChoice: (choice: Choice) => void;
}

const ChoiceList: React.FC<ChoiceListProps> = ({ choices, inventory, onChoice }) => {
  return (
    <div className="grid gap-4 mt-8">
      {choices.map((choice, index) => {
        const isLocked = choice.requiredItem && !inventory.includes(choice.requiredItem);
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Button
              disabled={isLocked}
              onClick={() => onChoice(choice)}
              variant="outline"
              className={`w-full justify-between h-auto py-4 px-6 text-left group transition-all duration-300 ${
                isLocked 
                  ? "opacity-50 cursor-not-allowed border-gray-800 bg-gray-900/50" 
                  : "hover:border-cyan-400 hover:bg-cyan-400/5 border-white/10 bg-white/5"
              }`}
            >
              <span className="flex items-center gap-3">
                {isLocked ? (
                  <Lock size={18} className="text-gray-500" />
                ) : (
                  <ChevronRight size={18} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                )}
                <span className={`font-medium ${isLocked ? "text-gray-500" : "text-gray-200"}`}>
                  {choice.text}
                </span>
              </span>
              
              {choice.requiredItem && isLocked && (
                <span className="text-[10px] uppercase tracking-widest text-red-400/70 font-bold">
                  Requires: {choice.requiredItem}
                </span>
              )}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ChoiceList;