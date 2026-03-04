import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene } from "../types/story";

interface SceneDisplayProps {
  scene: Scene;
}

const SceneDisplay: React.FC<SceneDisplayProps> = ({ scene }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/10">
          <img
            src={scene.image}
            alt={scene.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-3xl font-bold text-white tracking-tight drop-shadow-lg">
              {scene.title}
            </h2>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-300 font-light italic">
            "{scene.description}"
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SceneDisplay;