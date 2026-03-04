export interface Choice {
  text: string;
  nextSceneId: string;
  requiredItem?: string;
  grantItem?: string;
}

export interface Scene {
  id: string;
  title: string;
  description: string;
  image: string;
  choices: Choice[];
  isEnd?: boolean;
}

export interface GameState {
  currentSceneId: string;
  inventory: string[];
  history: string[];
}